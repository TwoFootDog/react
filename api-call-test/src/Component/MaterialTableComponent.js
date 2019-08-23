import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

import * as RESTAPI from '../Common/RestApi';
// import { green } from '@material-ui/core/colors';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'black',
        color: theme.palette.common.white,
        // fontSize: 12,
        // height: 1
    },
    body: {
        // fontSize: 12,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = theme => ({
    root: {
        width: '100%',
        // marginTop: theme.spacing(10),
        // overflowX: 'auto',
    },
    table: {
        // width:'50%',
        minWidth: 2500,
    },
});

class MaterialTableComponent extends React.Component {
    state = {
        response: null, // 배치 전체 리스트 호출 응답값
    }

    constructor(props) {
        super(props);
        this.fetchBatchList();
        console.log("constructor call>>>>>>>>>>>>>>>>>>>>>" );
    }
    
    componentDidMount () {
        // this.fetchBatchList();
    }

    // 배치 전체 리스트를 호출하는 API를 호출하는 함수
    fetchBatchList = async () => {
        const response = await RESTAPI.getBatchList();
        this.setState({
            ...this.state,
            response: response,
        })
    }

    handleClick = (event, data) => {
        console.log("event" + event);
        console.log("row" + data);
        this.props.handleTableRowClick(data.batchJobId.masterBatchId);
    }

    render() {
        const {classes} = this.props;

        // 테이블의 column이 아닌 data 부분을 그려주는 함수
        const tableBody = () => {
            let tableData;
            // const response = await RESTAPI.getBatchList();
            // this.fetchBatchList();
            // response가 null이 아닌 경우만 테이블을 그려줌(null인 경우엔 map 함수가 정상 동작하지 않음)
            console.log("response111>>>>>>>>>>>>>>>>>>>>>" + JSON.stringify(this.state.response));
            if (this.state.response != null) {
                tableData = this.state.response.data.batchJobs;
                console.log("response222>>>>>>>>>>>>>>>>>>>>>" + this.state.response.data.batchJobs)
                return (
                    tableData.map(data => (
                        <StyledTableRow hover onClick={event => this.handleClick(event, data)} key={data.batchFile.fileId}>
                            <StyledTableCell component="th" scope="row">{data.batchJobId.masterBatchId}</StyledTableCell>    
                            <StyledTableCell align="right">{data.masterBatchName}</StyledTableCell>
                            <StyledTableCell align="right">{data.hostname}</StyledTableCell>
                            <StyledTableCell align="right">{data.inputFileYn}</StyledTableCell>
                            <StyledTableCell align="right">{data.batchFile.fileId}</StyledTableCell>
                            <StyledTableCell align="right">{data.batchFile.fileName}</StyledTableCell>
                            <StyledTableCell align="right">{data.preBatchExistYn}</StyledTableCell>
                            <StyledTableCell align="right">{data.fileAutoSendYn}</StyledTableCell>
                            <StyledTableCell align="right">{data.multiProcessCount}</StyledTableCell>
                            <StyledTableCell align="right">{data.reportType}</StyledTableCell>
                            <StyledTableCell align="right">{data.applyYn}</StyledTableCell>
                            <StyledTableCell align="right">{data.registerId}</StyledTableCell>
                            <StyledTableCell align="right">{data.registerDate}</StyledTableCell>
                            <StyledTableCell align="right">{data.updaterId}</StyledTableCell>
                            <StyledTableCell align="right">{data.updateDate}</StyledTableCell>
                        </StyledTableRow>
                        // <TableRow hover key={data.batchProgramId.batchSeq}>
                        //     <TableCell component="th" scope="row">{data.batchProgramId.systemId}</TableCell>    
                        //     <TableCell align="right">{data.batchProgramId.batchSeq}</TableCell>
                        //     <TableCell align="right">{data.batchProgramId.batchProcId}</TableCell>
                        //     <TableCell align="right">{data.batchKoreanName}</TableCell>
                        //     <TableCell align="right">{data.hasInputFile}</TableCell>
                        //     <TableCell align="right">{data.fileId}</TableCell>
                        //     <TableCell align="right">{data.sendResultFile}</TableCell>
                        // </TableRow>
                    ))
                )
            } else {
                return;
            }
        }

        return(
            // 테이블의 column과 data부분을 그려줌
            <div className={classes.root}>
                {/* <Paper className={useStyles.paper}> */}
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>배치프로그램시스템ID</StyledTableCell>
                                <StyledTableCell align='center'>배치프로그램한글명</StyledTableCell>
                                <StyledTableCell align='right'>호스트명</StyledTableCell>
                                <StyledTableCell align='right'>파일유입여부</StyledTableCell>
                                <StyledTableCell align='right'>배치파일ID</StyledTableCell>
                                <StyledTableCell align='right'>배치파일명</StyledTableCell>
                                <StyledTableCell align='right'>사전배치존재여부</StyledTableCell>
                                <StyledTableCell align='right'>파일자동전송여부</StyledTableCell>
                                <StyledTableCell align='right'>동시수행최대개수</StyledTableCell>
                                <StyledTableCell align='right'>파일결과타입</StyledTableCell>
                                <StyledTableCell align='right'>적용여부</StyledTableCell>
                                <StyledTableCell align='right'>등록자ID</StyledTableCell>
                                <StyledTableCell align='right'>등록일자</StyledTableCell>
                                <StyledTableCell align='right'>변경자ID</StyledTableCell>
                                <StyledTableCell align='right'>변경일자</StyledTableCell>
                                {/* <TableCell>배치프로그램시스템ID</TableCell>
                                <TableCell align='right'>배치순번</TableCell>
                                <TableCell align='right'>배치프로세스ID</TableCell>
                                <TableCell align='right'>배치한글명</TableCell>
                                <TableCell align='right'>파일존재구분</TableCell>
                                <TableCell align='right'>파일ID</TableCell>
                                <TableCell align='right'>결과파일전송구분</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody className={useStyles.tr}>
                            {tableBody()}
                        </TableBody>
                    </Table>
                {/* </Paper> */}
            </div>
        ); 
    }
}

export default withStyles(useStyles)(MaterialTableComponent);
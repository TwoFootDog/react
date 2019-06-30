import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import * as RESTAPI from '../Common/RestApi';
import { green } from '@material-ui/core/colors';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: 15,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        // width:'50%',
        minWidth: 700,
    },
}));

class MaterialTableComponent extends React.Component {
    state = {
        response: null, // 배치 전체 리스트 호출 응답값
    }

    constructor(props) {
        super(props);
        this.fetchBatchList();
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
    }

    render() {
        // 테이블의 column이 아닌 data 부분을 그려주는 함수
        const tableBody = () => {
            let tableData;
            // response가 null이 아닌 경우만 테이블을 그려줌(null인 경우엔 map 함수가 정상 동작하지 않음)
            if (this.state.response != null) {
                tableData = this.state.response.data.batchProgram;
                return (
                    tableData.map(data => (
                        <StyledTableRow hover onClick={event => this.handleClick(event, data)} key={data.batchProgramId.batchSeq}>
                            <StyledTableCell component="th" scope="row">{data.batchProgramId.systemId}</StyledTableCell>    
                            <StyledTableCell align="right">{data.batchProgramId.batchSeq}</StyledTableCell>
                            <StyledTableCell align="right">{data.batchProgramId.batchProcId}</StyledTableCell>
                            <StyledTableCell align="right">{data.batchKoreanName}</StyledTableCell>
                            <StyledTableCell align="right">{data.hasInputFile}</StyledTableCell>
                            <StyledTableCell align="right">{data.fileId}</StyledTableCell>
                            <StyledTableCell align="right">{data.sendResultFile}</StyledTableCell>
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
            <div className={useStyles.root}>
                {/* <Paper className={useStyles.paper}> */}
                    <Table className={useStyles.table} style={{width:'80rem'}}>
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>배치프로그램시스템ID</StyledTableCell>
                                <StyledTableCell align='right'>배치순번</StyledTableCell>
                                <StyledTableCell align='right'>배치프로세스ID</StyledTableCell>
                                <StyledTableCell align='right'>배치한글명</StyledTableCell>
                                <StyledTableCell align='right'>파일존재구분</StyledTableCell>
                                <StyledTableCell align='right'>파일ID</StyledTableCell>
                                <StyledTableCell align='right'>결과파일전송구분</StyledTableCell>
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

export default MaterialTableComponent;
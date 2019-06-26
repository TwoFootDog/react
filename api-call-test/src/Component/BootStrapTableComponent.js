import React from 'react';

import * as RESTAPI from '../Common/RestApi';


class BootStrapTableComponent extends React.Component {
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

    render() {
        const tableBody = () => {
            let tableData = [];
            if (this.state.response != null) {
                tableData = this.state.response.data.batchProgram;
                return (
                    tableData.map((data, index) => (
                        <tbody>
                        <th scope="row">{data.batchProgramId.systemId}</th>
                        <td>{data.batchProgramId.batchSeq}</td>
                        <td>{data.batchProgramId.batchProcId}</td>
                        <td>{data.batchKoreanName}</td>
                        <td>{data.hasInputFile}</td>
                        <td>{data.fileId}</td>
                        <td>{data.sendResultFile}</td>
                        </tbody>
                    ))
                )
            } else {
                return;
            }
        }
        return(
            <div>
                <table class="table">
                    <caption>Batch Program List</caption>
                    <thead>
                        <tr>
                            <th scope="col">배치프로그램시스템ID</th>
                            <th scope='col'>배치순번</th>
                            <th scope='col'>배치프로세스ID</th>
                            <th scope='col'>배치한글명</th>
                            <th scope='col'>파일존재구분</th>
                            <th scope='col'>파일ID</th>
                            <th scope='col'>결과파일전송구분</th>
                        </tr>
                    </thead>
                    {tableBody()}
                </table>
            </div>
        ); 
    }
}

export default BootStrapTableComponent;
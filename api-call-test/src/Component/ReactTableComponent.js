import React from 'react';
import ReactTable from 'react-table';
import TreeTableHOC from 'react-table/lib/hoc/treeTable';
import SelectTableHOC from 'react-table/lib/hoc/selectTable';
import FoldableTableHOC from 'react-table/lib/hoc/foldableTable';
import 'react-table/react-table.css';

// import {getBatchList} from './RestApi';
import * as RESTAPI from '../Common/RestApi';

class ReactTableComponent extends React.Component {
    state = {
        response: null, // 배치 전체 리스트 호출 응답
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
        const SelectTreeTable = SelectTableHOC(TreeTableHOC(ReactTable));
        const FoldableSelectTreeTable = FoldableTableHOC(SelectTreeTable);
        // const FoldableSelectTreeTable = SelectTableHOC(ReactTable);
        let tableData = [];
        const columns = [{
            Header: 'No', 
            accessor: '',
            Cell: row=> (<span>{row.index}</span>),
        }, {
            Header: '배치프로그램시스템ID',
            accessor: 'batchProgramId.systemId',
            Cell: row => (<span>{row.value}</span>),
            foldable: true,
        }, {
            Header: '배치순번',
            accessor: 'batchProgramId.batchSeq',
            foldable: true,
        }, {
            Header: '배치프로세스ID',
            accessor: 'batchProgramId.batchProcId'
        }, {
            Header: '배치한글명',
            accessor: 'batchKoreanName'
        }, {
            Header: '파일존재구분',
            accessor: 'hasInputFile'
        }, {
            Header: '파일ID',
            accessor: 'fileId'
        }, {
            Header: '결과파일전송구분',
            accessor: 'sendResultFile'
        }]
        if (this.state.response != null) {
            tableData = this.state.response.data.batchProgram;
        }
        const table = () => {
            return (
                <ReactTable style={{width:'80rem'}}
                    data={tableData} 
                    columns={columns} 
                    defaultSorted={[{ id: 'batchProgramId.batchSeq', desc: false}]}
                    getTdProps={(state, rowInfo, column, instance) => {
                        return {
                          onClick: (e, handleOriginal) => {
                            console.log('it produced this event:', e)
                            console.log('It was in this column:', column)
                            console.log('It was in this row:', rowInfo)
                            console.log('It was in this table instance:', instance)
                     
                            if (handleOriginal) {
                              handleOriginal()
                            }
                          }
                        }
                      }}
                    />
                )
        }
        return (
            table()
        )
        
        // const data = [{
        //     name: 'Tanner Linsley',
        //     age: 26,
        //     friend: {
        //       name: 'Jason Maurer',
        //       age: 23,
        //     }
        //   },{
        //     name: 'Tanner Linsley1',
        //     age: 21,
        //     friend: {
        //       name: 'Jason Maurer1',
        //       age: 21,
        //     }
        //   }]
         
        //   const columns = [{
        //     Header: 'Name',
        //     accessor: 'name' // String-based value accessors!
        //   }, {
        //     Header: 'Age',
        //     accessor: 'age',
        //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        //   }, {
        //     id: 'friendName', // Required because our accessor is not a string
        //     Header: 'Friend Name',
        //     // accessor: 'friend.name'
        //     accessor: d => d.friend.name // Custom value accessors!
        //   }, {
        //     Header: props => <span>Friend Age</span>, // Custom header components!
        //     accessor: 'friend.age'
        //   }]
        // let table = null;
        // console.log('render() response : ', response);

        // if (response !== null) {
        //     const batchProgram = response.data.batchProgram;
            // return (<ReactTable data={data} columns={columns}/>);
            // table = batchProgram.map((res, index) => {
            //     console.log(res);
            //     return (
            //         <li key={index}>
            //             {res.batchProgramId.batchProcId}
            //         </li>
            //     )
            // });
        // }

    }
}

export default ReactTableComponent;

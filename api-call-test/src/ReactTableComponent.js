import React from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import TreeTableHOC from 'react-table/lib/hoc/treeTable';
import SelectTableHOC from 'react-table/lib/hoc/selectTable';
import FoldableTableHOC from 'react-table/lib/hoc/foldableTable';
import 'react-table/react-table.css';

const ApiURL = "http://198.13.47.188:8080/batch";
// let ApiURL = '/batch'

class App2 extends React.Component {
    state = {
        response: null,
    }
    constructor(props) {
        super(props);
        this.getApi();
    }
    getApi() {
        console.log("bbb");
            axios.get(ApiURL, 
                {
                    // mode : 'no-cors',
                    headers : {
                        // 'Accept' : 'application/json',
                        // 'Content-Type' : 'application/json;charset=UTF-8',
                        // 'Access-Control-Allow-Origin': 'http://localhost:3000'
                        // 'Access-Control-Allow-Credentials' : 'true'
                        // 'Access-Control-Allow-Headers' : 'Origin, X-REquested-With, Content-Type, Accept'
                        // 'Content-Type': 'application/json'
        }})
            .then(response => {
                this.setState({
                    ...this.state,
                    response: response
                })
                // console.log(this.state.response);
            })
    }

    render() {
        // const SelectTreeTable = SelectTableHOC(TreeTableHOC(ReactTable));
        // const FoldableSelectTreeTable = FoldableTableHOC(SelectTreeTable);
        const FoldableSelectTreeTable = SelectTableHOC(ReactTable);
        let data;
        const columns = [{
            Header: '배치프로그램시스템ID',
            accessor: 'batchProgramId.systemId',
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
           data = this.state.response.data.batchProgram;

        }
        const table = () => {
            console.log('data : ', data);
            return (
                <FoldableSelectTreeTable 
                    data={data} 
                    columns={columns} 
                    defaultSorted={[{ id: 'batchProgramId.batchSeq', desc: false }]}/>
                )
        }
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

        return (
            table()
        )
    }
}

export default App2;

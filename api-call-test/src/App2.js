import React from 'react';
import axios from 'axios';

const ApiURL = "http://198.13.47.188:8080/batch";
// let ApiURL = '/batch'

class App2 extends React.Component {
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
            .then(response => {console.log(response)})
    }

    render() {
        return (
            <div>
            <button onClick={this.getApi}>button</button>
            </div>
        )
    }
}

export default App2;

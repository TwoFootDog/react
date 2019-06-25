import React from 'react';
import * as RESTAPI from '../Common/RestApi';

class MaterialTableComponent extends React.Component {
    state = {
        response: null,
    }

    constructor(props) {
        super(props);
    }

    fetchBatchList = async () => {
        const response = await RESTAPI.getBatchList();
        this.setState({
            ...this.state,
            response: response,
        })
    }

    render() {
        return(
            <div></div>
        ); 
    }
}

export default MaterialTableComponent;
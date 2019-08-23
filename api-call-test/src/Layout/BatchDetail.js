import React from 'react';
import * as RESTAPI from '../Common/RestApi.js';


class BatchDetail extends React.Component {

    state = {
        response: null,
    }

    constructor (props) {
        super(props);
        console.log('props>>>>>>>>>>>>>>' + props);
        this.batchDetailCall(this.props.masterBatchId);
    }

    batchDetailCall = async (masterBatchId) => {
        const response = await RESTAPI.getBatchDetailInfo(masterBatchId);
        console.log('response>>>>>>>>>>>' + JSON.stringify(response));
        this.setState({
            ...this.state,
            response: response,
        })
    }

    render () {
        // console.log('masterBatchId' + JSON.stringify(this.props.masterBatchId));
        if (this.state.response != null) {
            console.log('this.state.response222>>>' + JSON.stringify(this.state.response));
            return (
                <div>
                    {/* aaaa */}
                    {this.state.response.data.batchJobs[0].masterBatchName}
                </div>
            )
        } else {
            return 2;
        }
        // if (1===1) {
        //     return 1;
        // } else {
        //     return 2;
        // }

    }

}

export default BatchDetail;
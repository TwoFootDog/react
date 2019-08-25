import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import * as RESTAPI from '../Common/RestApi.js';
import { TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = theme => ({
    root: {
        padding: theme.spacing(2),
        // marginLeft: theme.spacing(10),
        // marginRight: theme.spacing(10),
        textAlign: 'left',
        // minWidth: 200
    },
    container: {
        backgroundColor: '#f0f0f0',
        padding: theme.spacing(5, 10, 5, 10),
        // float: 'left'
        // display: 'flex',
        // flexWrap: 'wrap',
        // paddingTop: theme.spacing(5),
        // paddingLeft: theme.spacing(5)
    },
    subject1: {
        textAlign: 'center',
        marginBottom: theme.spacing(5)
    },
    textField: {
        // marginTop: theme.spacing(5),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
    },
    dense: {
        marginTop: theme.spacing(2),
    }
})

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
        const {classes} = this.props;
        if (this.state.response != null) {
            console.log('this.state.response222>>>' + JSON.stringify(this.state.response));
            return (
                <div className={classes.root}>
                <form className={classes.container} noValidate autoComplete="off">
                <Typography className={classes.subject1} variant="h5" component="h2" gutterBottom>
                배치상세정보
                </Typography>
                    <TextField
                        id="standard-name"
                        label="masterBatchId"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].batchJobId.masterBatchId}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="masterBatchName"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].masterBatchName}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="hostname"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].hostname}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="inputFileYn"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].inputFileYn}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="fileId"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].batchFile.fileId}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="fileName"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].batchFile.fileName}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="preBatchExistYn"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].preBatchExistYn}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="fileAutoSendYn"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].fileAutoSendYn}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="multiProcessCount"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].multiProcessCount}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="reportType"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].reportType}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="applyYn"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].applyYn}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="reportType"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].reportType}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="registerId"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].registerId}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="registerDate"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].registerDate}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="updaterId"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].updaterId}
                        margin="normal"
                    />
                    <TextField
                        id="standard-name"
                        label="updateDate"
                        className={classes.textField}
                        value={this.state.response.data.batchJobs[0].updateDate}
                        margin="normal"
                    />
                </form>
                </div>
                // <div>
                    // {this.state.response.data.batchJobs[0].masterBatchName}
                // </div>
            )
        } else {
            return (
                <div></div>
            );
        }

    }

}

export default withStyles(useStyles)(BatchDetail);
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TpSchedulerImage from '../image/TpSchedulerImage.jpg'
import BoSchedulerImage from '../image/BoSchedulerImage.jpg'

const useStyles = makeStyles(theme => ({
    firstContainer: {
        flexGrow: 1,
        // backgroundColor: '#00c9ff',
        backgroundColor: '#0079ff',
        // color: '#0002ff',
        height: '700px',
        padding: theme.spacing(5)
        // padding: theme.spacing(10)
    },
    firstCommentHeader: {
        color: 'white',
        fontSize: '80px',
        fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(15)
        // padding: theme.spacing(3, 2)
    },
    firstComment: {
        color: 'white',
        fontSize: '25px',
        marginTop: theme.spacing(10)
        // padding: theme.spacing(3, 2)
    },
    secondContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: '400px',
        width:'70%',
        paddingTop: theme.spacing(15),
    },
    secondContainer2: {
        // flexGrow: 1,
        // paddingTop: theme.spacing(15),
        // width:'20%',
    },
    secondCommentHeader: {
        fontSize: '30px',
        fontWeight: theme.typography.fontWeightBold,
    },
    secondComment: {
        flexGrow: 1,
        marginTop: theme.spacing(5),
        width:'50%',
    },
    thirdContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        height: '300px',
        width: '70%'
    }
}));


const HomeComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.firstContainer} justify="center" xs={12}> 
                <Grid item >
                    <div className={classes.firstCommentHeader}>Batch Visualizer</div>
                    <div className={classes.firstComment}>Nxmile System의 배치프로그램의 상세 정보 및<br/>실행 현황을 볼 수 있는 사이트입니다.</div>
                </Grid>
            </Grid>
            <Grid container className={classes.secondContainer} justify="center" xs={12}> 
                <Grid item className={classes.secondContainer2} xs={12} sm={6} >
                    <Typography className={classes.secondCommentHeader}>TP배치스케쥴러</Typography>
                    <Typography component="p" className={classes.secondComment}>
                        승인/회원 배치프로그램의 상세정보와 실행 이력 실시간 확인을 통해서 장애에 즉각적인 대처가 가능합니다
                    </Typography>
                    <img src={TpSchedulerImage} width="300px" height="300px"/>
                </Grid>
                <Grid item className={classes.secondContainer2} xs={12} sm={6}>
                    <Typography className={classes.secondCommentHeader}>정산배치스케쥴러</Typography>
                    <Typography component="p" className={classes.secondComment}>
                        정산 배치프로그램의 실행 프로세스 및 현황을 다이어그램 형식으로 쉽고 빠르게 확인 할 수 있습니다
                    </Typography>
                    <img src={BoSchedulerImage} width="300px" height="300px"/>
                </Grid>
            </Grid>
            <Grid container className={classes.thirdContainer} justify="center" xs={12}>

            </Grid>
        </div>
    )
}

export default HomeComponent;
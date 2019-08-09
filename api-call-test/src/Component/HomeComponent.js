import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '../image/HomeIcon.svg'
import TpSchedulerImage from '../image/TpSchedulerImage.jpg'
import BoSchedulerImage from '../image/BoSchedulerImage.jpg'

const useStyles = makeStyles(theme => ({
    firstContainer: {
        flexGrow: 1,
        // backgroundColor: '#00c9ff',
        backgroundColor: '#0079ff',
        // color: '#0002ff',
        // height: '700px',
        paddingBottom: theme.spacing(20)
        // padding: theme.spacing(10)
    },
    firstCommentHeader: {
        color: 'white',
        fontSize: '60px',
        fontFamily: 'Segoe UI',
        fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(15)
        // padding: theme.spacing(3, 2)
    },
    firstComment: {
        color: '#d2d2d2',
        fontSize: '25px',
        marginTop: theme.spacing(10)
        // padding: theme.spacing(3, 2)
    },
    secondContainer: {
        flexGrow: 1,
        backgroundColor: 'white',
        // height: '1000px',
        width:'70%',
        // paddingBottom: theme.spacing(10)
    },
    secondSubject: {
        flexGrow: 1,
        fontSize: '40px',
        fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(10),
        width:'70%',
    },
    secondSubjectComment: {
        flexGrow: 1,
        fontSize: '25px',
        // fontWeight: theme.typography.fontWeightBold,
        marginTop: theme.spacing(2),
        width:'70%',
    },
    secondCommentHeader: {
        fontSize: '20px',
        fontWeight: theme.typography.fontWeightBold,
        paddingTop: theme.spacing(15),
    },
    secondComment: {
        flexGrow: 1,
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        width:'80%',
    },
    thirdContainer: {
        flexGrow: 1,
        backgroundColor: '#969696',
        // height: '300px',
        // width: '80%',
        marginTop: theme.spacing(20),
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(15)
        // padding: theme.spacing(5, 0, 20, 5)
    },
    thirdIcon: {
        // flexGrow: 1,
        fontSize: '14px',
        color: 'white',
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(2)
    },
    thirdComment: {
        flexGrow: 1,
        fontSize: '14px',
        color: 'white',
        // marginLeft: theme.spacing(-210)
    }
}));


const HomeComponent = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className={classes.firstContainer} justify="center" sm={12}> 
                <Grid item >
                    <div className={classes.firstCommentHeader}><img src={HomeIcon} width="50" height="50" style={{marginBottom: '14px', marginRight: '-5px'}}/>atch Visualizer</div>
                    <div className={classes.firstComment}>Nxmile System의 배치프로그램 상세 정보 및<br/>실행 현황을 볼 수 있는 사이트입니다.</div>
                </Grid>
            </Grid>
            <Grid container className={classes.secondContainer} justify="center" sm={12}> 
                <Grid item className={classes.secondSubject} sm={12}>
                    다양한 기능
                </Grid>
                <Grid item className={classes.secondSubjectComment} sm={12}>
                    Batch Visualizer의 다양한 기능을 업무에 활용하세요
                </Grid>
                <Grid item sm={12} md={6} >
                    <Typography className={classes.secondCommentHeader}>TP배치스케쥴러</Typography>
                    <Typography component="p" className={classes.secondComment}>
                        승인/회원 배치프로그램의 상세정보와 실행 이력 실시간 확인을 통해서 장애에 즉각적인 대처가 가능합니다
                    </Typography>
                    <img src={TpSchedulerImage} width="300px" height="300px"/>
                </Grid>
                <Grid item className={classes.secondContainer2} sm={12} md={6}>
                    <Typography className={classes.secondCommentHeader}>정산배치스케쥴러</Typography>
                    <Typography component="p" className={classes.secondComment}>
                        정산 배치프로그램의 실행 프로세스 및 현황을 다이어그램 형식으로 쉽고 빠르게 확인 할 수 있습니다
                    </Typography>
                    <img src={BoSchedulerImage} width="300px" height="300px"/>
                </Grid>
            </Grid>
            <Grid container className={classes.thirdContainer} sm={12}>
                <Grid item>
                    <img src={HomeIcon} className={classes.thirdIcon} width="50" height="50"/>
                </Grid>
                <Grid item className={classes.thirdComment}>
                    <Grid container>
                    Batch Visualizer Project
                    </Grid>
                    <Grid container>
                    SK주식회사C&C | 미디어/commerce사업Unit | OKCashbag운영파트
                    </Grid>
                    <Grid container>
                    경기 성남시 분당구 판교로255번길 46
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default HomeComponent;
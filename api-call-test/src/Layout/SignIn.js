import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import * as RestApi from '../Common/RestApi';
import { cyan } from '@material-ui/core/colors';

// function MadeWithLove() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Built with love by the '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Material-UI
//       </Link>
//       {' team.'}
//     </Typography>
//   );
// }

const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'darkcyan',
    color: 'white',
  },
});

const loginFailString = 'your username/password is invalid';

class SignIn extends React.Component {
  state = {
    userId: null,
    userPasswd: null,
    token: null,
    message: null,
  }

/*  constructor(props) {
    super(props);
  }*/

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault(); // 페이징 리로딩 방지
    const user = this.state;
    let result = null;

    try {
      result = await RestApi.signIn(user);
      console.log('SignIn Api Call Success : ' + result);
    } catch(err) {
      console.log('SignIn API Call Fail : ' + err);
    }

    if (result != null) {

      this.props.handleUserInfo(result.data.userId, result.data.token); // userId와 token정보를 parent component로 전달
      window.localStorage.clear();  // local 정보를 삭제한다
      window.localStorage.setItem('token', result.data.token); // local의 token정보 갱신
      this.props.history.push(`/`); // 로그인에 성공했을 경우 root로 이동
    } else {
      console.log('fire');
      this.setState({
        message: loginFailString,
      })
      this.props.history.push(`/signin`); // 로그인에 실패했을 경우 /signin으로 이동
    }
  }

  componentWillUpdate(nextProps, nextState) {
    // shouldComponentUpdate가 true를 반환했을 때만 호출됨
    console.log('componentWillUpdate');
}

  // const classes = useStyles();
  render() {
    const {classes} = this.props;
    const {userId, userPasswd, message} = this.state;

    if (this.props.isLogin) {
      console.log('already sign in');
      this.props.history.push('/');
    }

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              id="userId"
              label="User ID"
              name="userId"
              // autoComplete="email"
              autoFocus
              value={userId}
              onChange={this.handleChange}
            />
            <TextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              name="userPasswd"
              label="Password"
              type="password"
              id="userPasswd"
              autoComplete="current-password"
              value={userPasswd}
              onChange={this.handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <div style={{color: 'red'}}>{message}</div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}              
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item xs>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={5}>
          <MadeWithLove />
        </Box> */}
      </Container>
    );
  }
}

export default withStyles(useStyles)(withRouter(SignIn));
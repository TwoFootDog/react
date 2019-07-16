import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Home from './Home';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

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
    marginTop: theme.spacing(8),
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

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleSubmit = async (e) => {
    console.log('before sign in : ' + window.localStorage.getItem('token'));
    e.preventDefault(); // 페이징 리로딩 방지
    const user = this.state;
    let value = null
    try {
      value = await axios.post('http://127.0.0.1:8080/signin', JSON.stringify(user), { headers: {'content-type': 'application/json'}} )
    } catch(err) {
      console.log(err);
    }
    if (value != null) {
      console.log('userId : ' + value.data.userId);
      console.log('authorities : ' + value.data.authorities);
      console.log('token : ' + value.data.token);
      this.setState({
        token: value.data.token,
      })
      this.props.handleUserInfo(value.data.userId, value.data.token);
      window.localStorage.removeItem('token');  // local에 있는 token 정보를 삭제한다
      window.localStorage.clear();  // local 정보를 삭제한다
      window.localStorage.setItem('token', value.data.token); // local의 token정보를 갱신한다
      this.props.history.push(`/`); // 로그인에 성공했을 경우 root로 이동
    } else {
      console.log('fire');
      this.setState({
        message: loginFailString,
      })
      this.props.history.push(`/signin`); // 로그인에 성공했을 경우 root로 이동
    }

    
  }

  componentWillUpdate(nextProps, nextState) {
    // shouldComponentUpdate가 true를 반환했을 때만 호출됨
    console.log('componentWillUpdate');
}

  // const classes = useStyles();
  render() {
    const {classes} = this.props;
    const {userId, userPasswd, token, message} = this.state;

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
              color="primary"
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
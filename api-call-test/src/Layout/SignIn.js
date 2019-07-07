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

class SignIn extends React.Component {
  state = {
    userId: null,
    userPasswd: null,
  }

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault(); // 페이징 리로딩 방지
    const user = this.state;
    try {
      axios.post('http://127.0.0.1:8080/signin', JSON.stringify(user), { headers: {'content-type': 'application/json'}} )
    } catch(err) {
      console.log(err);
    }
  }
  // const classes = useStyles();
  render() {
    const {classes} = this.props;
    const {userId, userPasswd} = this.state;

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

export default withStyles(useStyles)(SignIn);
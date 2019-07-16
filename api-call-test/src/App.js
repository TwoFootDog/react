import React from 'react';
import { Route } from 'react-router-dom';
import TopNavBarComponent from './Component/TopNavBarComponent';
import Home from './Layout/Home';
import TableLayout from './Layout/TableLayout';
import Etc from './Layout/Etc';
import About from './Layout/About';
import SignIn from './Layout/SignIn';
import SignUp from './Layout/SignUp';
import {Link} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

class App extends React.Component {
  state = {
    userId: null,
    token: null,
    isLogin: false,
  }
  constructor(props) {
    super(props);
  }

  handleUserInfo = (userId, token) => {
    this.setState({
      userId: userId,
      token: token,
      isLogin: true,
    })
    console.log(userId);
    console.log(token);
    console.log('after sign in : ' + window.localStorage.getItem('token')); // local에 있는 token 정보를 가져온다
  }

  handleSignOut = () => {
    console.log('signout');
    this.setState({
      ...this.state,
      isLogin: false,
    })
  }

  componentWillMount = () => {
    // 컴포넌트가 화면에 나가기 직전에 호출됨
    console.log('App componentWillMount (deprecated)');
}

componentDidMount = () => {
    // 컴포넌트가 화면에 나타나게 됐을 때 호출됨
    console.log('App componentDidMount');
}
  render() {
    const { isLogin } = this.state;
    console.log("start>>>>>>>>>>>>>>>>>>>>>>>>");
    return (
      <span>
        <div className="App">
          <h1>리액트 테스트 프로젝트</h1>
        </div>
        <div>
          <TopNavBarComponent isLogin={isLogin} handleSignOut={this.handleSignOut}/>
        </div>
        <div align="center">
          <Route exact path="/" render = {() => <Home/>}/>
          <Route path="/tables" render = {() => <TableLayout isLogin={isLogin}/>}/>
          <Route path="/etc" render = {() => <Etc isLogin={isLogin}/>}/>
          <Route path="/about" render = {() => <About isLogin={isLogin}/>}/>
          <Route path="/signin" render = {() => <SignIn isLogin={isLogin} handleUserInfo={this.handleUserInfo}/>}/>
          {/* <Route path="/signin" render = {() => <SignIn/>}/> */}
          <Route path="/signup" render = {() => <SignUp/>}/>

          {/* <Route exact path="/" component={Home} />
          <Route exact path="/tables" component={TableLayout} />
          <Route path="/Etc" component={Etc} />
          <Route path="/about" component={About} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} /> */}
        </div>
      </span>
    );
  }
}

export default App;

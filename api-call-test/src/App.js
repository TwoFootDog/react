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

  handleUserId = (userId) => {
    this.setState({
      userId: userId,
      isLogin: true,
    })
    console.log(userId);
  }

  render() {
    const { isLogin } = this.state;
    return (
      <span>
        <div className="App">
          <h1>리액트 테스트 프로젝트</h1>
        </div>
        <div>
          <TopNavBarComponent isLogin={isLogin}/>
        </div>
        <div align="center">
          <Route exact path="/" render = {() => <Home/>}/>
          <Route path="/tables" render = {() => <TableLayout/>}/>
          <Route path="/etc" render = {() => <Etc/>}/>
          <Route path="/about" render = {() => <About/>}/>
          <Route path="/signin" render = {() => <SignIn function1={this.handleUserId}/>}/>
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

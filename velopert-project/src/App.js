import React from 'react'
import logo from './logo.svg'
import './App.css'
import MyName from './Component/MyName'
import Counter from './Component/Counter'
import InputDataManage from './Component/InputDataManage'

class App extends React.Component {
  render() {
    return (
      <span>
        <div className="App">
          {/*주석은 이렇게 */}
          <h1 //태그사이에
          >리액트</h1>
        </div>
        <div>
          <MyName name="리액트" />
        </div>
        <div>
          <div className="div-left-style"><Counter /></div>
          <div className="div-center-style"><InputDataManage /></div>
          <div className="div-right-style"><Counter /></div>
        </div>
      </span>
    )
  }
}

export default App;

import React from 'react'
import logo from './logo.svg'
import './App.css'
import MyName from './MyName'
import Counter from './Counter'

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
          <Counter />
        </div>
      </span>
    )
  }
}

export default App;

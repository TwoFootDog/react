import React, {Component} from 'react';

const Problematic = () => {
    throw (new Error('버그가 나타났다!'));
    return (
        <div></div>
    );
};

class Counter extends Component {
    state = {
        number: 0,
        count: {
            plusCount: 0,
            minusCount: 0
        },
        error: false
    }
    constructor(props) {
        super(props);
        console.log('constructor');
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         number: 0
    //     }
    // }

    componentWillMount() {
        // 컴포넌트가 화면에 나가기 직전에 호출됨
        console.log('componentWillMount (deprecated)');
    }

    componentDidMount() {
        // 컴포넌트가 화면에 나타나게 됐을 때 호출됨
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 5의 배수면 리렌더링하지 않음
        console.log('shouldComponentUpdate');
        if (nextState.number % 5 === 0) {
            return false;
        }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        // shouldComponentUpdate가 true를 반환했을 때만 호출됨
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        // render()를 호출하고 난 다음에 발생
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, info) {
        this.setState({
            error: true
        })
    }

    // 비구조화 할당
    handleIncrease = () => {
        this.setState(
            ({number, count}) => ({
                number: number + 1,
                count: {
                    ...count,
                    plusCount: count.plusCount + 1
                }
            }) 
        )
            // number: this.state.number + 1,
            // count: {
            //     ...this.state.count,
            //     plusCount: this.state.count.plusCount + 1
            // }
        // })
    }

    handleDecrease = () => {
        const {number, count} = this.state
        this.setState({
            number: number - 1,
            count: {
                ...count,
                minusCount: count.minusCount + 1
            }
        })
        // this.setState({
        //     number: this.state.number - 1,
        //     count: {
        //         ...this.state.count,
        //         minusCount: this.state.count.minusCount + 1
        //     }
        // })
    }
    
    render() {
        if (this.state.error) return (<h1>에러 발생!{this.state.number}</h1>)
        console.log('render');
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 && <Problematic />}
                <div>plusCount: {this.state.count.plusCount}</div>
                <div>minusCount: {this.state.count.minusCount}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={()=> this.handleDecrease()}>-</button>
            </div>
        )
    }
}

export default Counter
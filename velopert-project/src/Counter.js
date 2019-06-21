import React, {Component} from 'react'

class Counter extends Component {
    state = {
        number: 0,
        count: {
            plusCount: 0,
            minusCount: 0
        }
    }
    constructor(props) {
        super(props)
        console.log("constructor")
    }
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         number: 0
    //     }
    // }

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
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <div>plusCount: {this.state.count.plusCount}</div>
                <div>minusCount: {this.state.count.minusCount}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={()=> this.handleDecrease()}>-</button>
            </div>
        )
    }
}

export default Counter
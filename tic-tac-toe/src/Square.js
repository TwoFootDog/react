import React from 'react'

// function Square(props) {
const Square = (props) => {
    if (props.winnerIndex.indexOf(props.index) !== -1) {
        return (
            <button className="winnerSquare" onClick = {props.onClick}>
                {props.value}
            </button>
            );
    } else {
        return (
            <button className="square" onClick = {props.onClick}>
                {props.value}
            </button>
            );
    }
}
// class Square extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         value : null,
//     //     };
//     // }
//     render() {
//         return (
//         <button className="square" 
//         // onClick={()=> this.setState({value : 'X'})}>
//         onClick = {() => this.props.onClick()}>
//             {/* { {this.state.value} } */}
//             {this.props.value}
//         </button>
//         );
//      }
// }

export default Square
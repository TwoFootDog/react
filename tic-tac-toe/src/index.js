import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'

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

// function calculatreWinner(squares) {
//     const lines = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];
//     console.log('lines length : ' + lines.length);
//     for (let i = 0; i < lines.length; i++) {
//         const [a, b, c] = lines[i];
//         if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//             return squares[a];
//         }
//     }
//     return null;
// }

function calculateWinner(squares) {
    const widthIndex = 1;
    const heightIndex = 5;
    let winnerSqures = {
        squares: null,
        winnerIndex: [],
    };

    for (let i = 0; i < 5; i++) {
        // 세로 일치 확인
        if (squares[i] && 
            squares[i] === squares[i + heightIndex] && 
            squares[i] === squares[i + heightIndex*2] && 
            squares[i] === squares[i + heightIndex*3] && 
            squares[i] === squares[i + heightIndex*4]) {
            winnerSqures.squares = squares[i];
            winnerSqures.winnerIndex.push(i);
            winnerSqures.winnerIndex.push(i + heightIndex);
            winnerSqures.winnerIndex.push(i + heightIndex*2);
            winnerSqures.winnerIndex.push(i + heightIndex*3);
            winnerSqures.winnerIndex.push(i + heightIndex*4);
            return winnerSqures;
            // return squares[i];
        }
        // 가로 일치 확인
        if (squares[i * heightIndex] && 
            squares[i * heightIndex] === squares[i * heightIndex + 1] && 
            squares[i * heightIndex] === squares[i * heightIndex + 2] && 
            squares[i * heightIndex] === squares[i * heightIndex + 3] && 
            squares[i * heightIndex] === squares[i * heightIndex + 4]) {
            winnerSqures.squares = squares[i * heightIndex];
            winnerSqures.winnerIndex.push(i * heightIndex);
            winnerSqures.winnerIndex.push(i * heightIndex + 1);
            winnerSqures.winnerIndex.push(i * heightIndex + 2);
            winnerSqures.winnerIndex.push(i * heightIndex + 3);
            winnerSqures.winnerIndex.push(i * heightIndex + 4);
            return winnerSqures;
            // return squares[i * heightIndex];
        }
    }
    // 대각선 일치 확인
    if (squares[0] && 
        squares[0] === squares[0 + (heightIndex + widthIndex)*1 ] &&
        squares[0] === squares[0 + (heightIndex + widthIndex)*2 ] &&
        squares[0] === squares[0 + (heightIndex + widthIndex)*3 ] &&
        squares[0] === squares[0 + (heightIndex + widthIndex)*4 ]) {
        winnerSqures.squares = squares[0];
        winnerSqures.winnerIndex.push(0);
        winnerSqures.winnerIndex.push(0 + (heightIndex + widthIndex)*1 );
        winnerSqures.winnerIndex.push(0 + (heightIndex + widthIndex)*2 );
        winnerSqures.winnerIndex.push(0 + (heightIndex + widthIndex)*3 );
        winnerSqures.winnerIndex.push(0 + (heightIndex + widthIndex)*4 );
        return winnerSqures;
        // return squares[0];
    }
    if (squares[4] && 
        squares[4] === squares[4 + (heightIndex - widthIndex)*1 ] &&
        squares[4] === squares[4 + (heightIndex - widthIndex)*2 ] &&
        squares[4] === squares[4 + (heightIndex - widthIndex)*3 ] &&
        squares[4] === squares[4 + (heightIndex - widthIndex)*4 ]) {
        winnerSqures.squares = squares[4];
        winnerSqures.winnerIndex.push(4);
        winnerSqures.winnerIndex.push(4 + (heightIndex - widthIndex)*1 );
        winnerSqures.winnerIndex.push(4 + (heightIndex - widthIndex)*2 );
        winnerSqures.winnerIndex.push(4 + (heightIndex - widthIndex)*3 );
        winnerSqures.winnerIndex.push(4 + (heightIndex - widthIndex)*4 );
        return winnerSqures;
        // return squares[4];
    }
    return winnerSqures;
}

function Square(props) {
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

class Board extends React.Component {

    renderSquare(i) {
        // return <Square value={i}/>;
        return (
            <Square 
                value={this.props.squares[i]} 
                index={i}
                winnerIndex={this.props.winnerIndex}
                onClick={() => this.props.onClick(i)}
            />);
    }

    render() {
        let allSquares = [];      
        let rowSquares = [];
        let createSquare = () => {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    rowSquares.push(<span key={i*5 + j}>{this.renderSquare(i*5 + j)}</span>);
                }
                allSquares.push(<div className="board-row" key={i}>{rowSquares}</div>)
                rowSquares = [];
            }
        } 
        createSquare();

        return (
            <div>
                {allSquares.map(Square => Square)}
            </div>
        // <div>
        //     <div className="board-row">
        //     {this.renderSquare(0)}
        //     {this.renderSquare(1)}
        //     {this.renderSquare(2)}
        //     {this.renderSquare(3)}
        //     {this.renderSquare(4)}
        //     </div>
        //     <div className="board-row">
        //     {this.renderSquare(5)}
        //     {this.renderSquare(6)}
        //     {this.renderSquare(7)}
        //     {this.renderSquare(8)}
        //     {this.renderSquare(9)}
        //     </div>ild
        //     {this.renderSquare(10)}
        //     {this.renderSquare(11)}
        //     {this.renderSquare(12)}
        //     {this.renderSquare(13)}
        //     {this.renderSquare(14)}
        //     </div>
        //     <div className="board-row">
        //     {this.renderSquare(15)}
        //     {this.renderSquare(16)}
        //     {this.renderSquare(17)}
        //     {this.renderSquare(18)}
        //     {this.renderSquare(19)}
        //     </div>
        //     <div className="board-row">
        //     {this.renderSquare(20)}
        //     {this.renderSquare(21)}
        //     {this.renderSquare(22)}
        //     {this.renderSquare(23)}
        //     {this.renderSquare(24)}
        //     </div>
        // </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(25).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
            stepRow: Array(25).fill(null),  // step 별 row index
            stepCol: Array(25).fill(null),  // step 별 col index
            selectButton: 0,
            isAsc: true,
        }
    }

    handClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const stepRow = this.state.stepRow.slice();
        const stepCol = this.state.stepCol.slice();

        if (calculateWinner(squares).squares || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext? 'X' : 'O';
        stepRow[this.state.stepNumber] = i%5;
        stepCol[this.state.stepNumber] = parseInt(i/5);
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            stepRow : stepRow,
            stepCol : stepCol,
        });
        console.log('history2 : ' + this.state.history);    
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            selectButton: step,
        })
    }

    isAscClick(isAsc) {
        this.setState({
            isAsc: isAsc,
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const stepRow = this.state.stepRow.slice();
        const stepCol = this.state.stepCol.slice();
        const selectButton = this.state.selectButton;
        const winner = calculateWinner(current.squares).squares;
        const winnerIndex = calculateWinner(current.squares).winnerIndex;
        

        const moves = history.map((step, move) => {
            console.log('step : ', step);
            console.log('move : ', move);
            console.log('stepRow : ', stepRow);
            console.log('stepCol : ', stepCol);
            console.log('this.state.history.length: ', this.state.history.length-1);
            
            // const desc = move ? 'Go to move #' + move + '(row, col) : (' + stepRow[move-1] + ', ' + stepCol[move-1] + ')'  : 'Go to Game start';
            
            if (move === 0) {
                return (
                    <li key={move}>
                        <button className="btn btn-primary" onClick={() => this.jumpTo(move)}>Go to Game start</button>
                    </li>
                ) 
            } else {
                if(!this.state.isAsc) {
                    move = (this.state.history.length) - move;
                } 
                const desc = 'Go to move #' + move + '(row, col) : (' + stepRow[move-1] + ', ' + stepCol[move-1] + ')';
                if (move === selectButton) {
                    if (move % 2 === 0) {
                        return (
                            <li key={move}>
                                <button className="btn btn-primary" onClick={() => this.jumpTo(move)}>{desc}</button>
                            </li>
                        )
                    } else {
                        return (
                            <li key={move}>
                                <button className="btn btn-success" onClick={() => this.jumpTo(move)}>{desc}</button>
                            </li>
                        )
                    }
                } else {
                    if (move % 2 === 0) {
                        return (
                            <li key={move}>
                                <button className="btn btn-outline-primary" onClick={() => this.jumpTo(move)}>{desc}</button>
                            </li>
                        )
                    } else {
                        return (
                            <li key={move}>
                                <button className="btn btn-outline-success" onClick={() => this.jumpTo(move)}>{desc}</button>
                            </li>
                        )
                    }
                }
            }
        })

        const ascDescButton = () => {
            let button = [];
            button.push(<button className="btn btn-danger" key='asc' onClick={() => this.isAscClick(true)}>ASC</button>)
            button.push(<button className="btn btn-warning" key='desc' onClick={() => this.isAscClick(false)}>DESC</button>)
            return (
                <div>{button}</div>
            )
        }


        let status;
        if (winner) {
            status = 'Winner:' + winner;
            console.log("winnderIndex : " + winnerIndex);
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
        return (
        <div className="game">
            <div className="game-board">
            <div>{status}</div>
            <Board squares = {current.squares} winnerIndex = {winnerIndex}
            onClick={(i) => {
                console.log("i : " + i)
                this.handClick(i)}} />
            </div>
            <div className="game-info">
            <ol>{moves}</ol>
            <ol>{ascDescButton()}</ol>
            </div>
            
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

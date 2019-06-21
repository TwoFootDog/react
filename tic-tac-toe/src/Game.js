import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import CalculateWinner from './CalculateWinner'
import Board from './Board'

/* tic-tac-toe 게임 component */
class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(25).fill(null),  // 25개 사각형의 history
            }],
            stepNumber: 0,
            xIsNext: true,
            stepRow: Array(25).fill(null),  // step 별 row index
            stepCol: Array(25).fill(null),  // step 별 col index
            selectButton: 0,                // 현재 선택된 button index
            isAsc: true,                    // true : 오름차순, false : 내림차순
        }
    }

    /* 사각형 click 시 호출되는 function */
    handClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const stepRow = this.state.stepRow.slice();
        const stepCol = this.state.stepCol.slice();

        if (CalculateWinner(squares).squares || squares[i]) {
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

    jumpTo = (step) => {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
            selectButton: step,
        })
    }

    isAscClick = (isAsc) => {
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
        const winner = CalculateWinner(current.squares).squares;
        const winnerIndex = CalculateWinner(current.squares).winnerIndex;
        

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

export default Game
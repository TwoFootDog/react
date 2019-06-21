import React from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Square from './Square'


/* 사각형을 그려준다. 
value : 'X' or 'O' or null 
index : 사각형의 index
winnderIndex : 게임에서 이기게 한 index */
class Board extends React.Component {
    renderSquare = (i) => {
        return (
            <Square 
                value={this.props.squares[i]} 
                index={i}
                winnerIndex={this.props.winnerIndex}
                onClick={() => this.props.onClick(i)}
            />);
    }

    render() {
        /* rowSqaures에 가로 5개 사각형을 넣어준 후 allSquares에 rowSqaure와 앞뒤에 div 태그를 넣어준다 */
        let rowSquares = [];    // 가로열 사각형
        let allSquares = [];    // 전체 사각형
        let createSquare = () => {
            for (let i = 0; i < 5; i++) {
                for (let j = 0; j < 5; j++) {
                    rowSquares.push(<span key={i*5 + j}>{this.renderSquare(i*5 + j)}</span>);
                    // rowSquares.push(<div className="board-row">{this.renderSquare(i*5 + j)});
                    // rowSqaures.push(<div>)
                }
                allSquares.push(<div className="board-row" key={i}>{rowSquares}</div>)
                rowSquares = [];
            }
        } 
        
        createSquare();

        return (
            /* 전체 사각형 return */
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

export default Board
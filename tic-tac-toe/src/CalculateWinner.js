// import React from 'react'

/* 게임 승리자를 결정한다 */
// function CalculateWinner(squares)
const CalculateWinner = (squares) => {
    const widthIndex = 1;   // 가로 1칸은 index 1 차이
    const heightIndex = 5;  // 세로 1칸은 index 5 차이
    let winnerSqures = {
        squares: null,      // 승리한 게이머('X' or 'O')
        winnerIndex: [],    // 승리하게 만든 사각형의 index 배열(예를들면 0,1,2,3,4로 승리를 하게 되면 0,1,2,3,4가 들어감)
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


export default CalculateWinner
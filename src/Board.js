import React, { Component } from 'react';

import Square from './Square';

class Board extends Component {
    constructor(props) {
        super();

        this.state = {
            currentStatus: 'X',
            squares: Array(9).fill(null),
            message: ''
        }
    }

    changePlayer = (num) => {
        this.setState(prevState => ({
            currentStatus: prevState.currentStatus === 'X' ? 'O' : 'X',
            squares: prevState.squares.map((square, index) => index === num ? prevState.currentStatus : square !== null ? square : null)
        }), this.isGameWon);
    }

    isGameWon = () => {
        let c = this.state.squares;

        if(c[0] === c[1] && c[0] === c[2] && c[0] !== null) {
            
            this.setState({
                message: `${c[0]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[3] === c[4] && c[3] === c[5] && c[3] !== null) {
            
            this.setState({
                message: `${c[3]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[6] === c[7] && c[6] === c[8] && c[6] !== null) {
            
            this.setState({
                message: `${c[6]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[0] === c[3] && c[0] === c[6] && c[0] !== null) {
            
            this.setState({
                message: `${c[0]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[1] === c[4] && c[1] === c[7] && c[1] !== null) {
            
            this.setState({
                message: `${c[1]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[2] === c[5] && c[2] === c[8] && c[2] !== null) {
            
            this.setState({
                message: `${c[2]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[0] === c[4] && c[0] === c[8] && c[0] !== null) {
            
            this.setState({
                message: `${c[0]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        if(c[2] === c[4] && c[2] === c[6] && c[2] !== null) {
            
            this.setState({
                message: `${c[2]} won the game !`,
                squares: this.state.squares.map( (square, index) => square === null ? '' : square )
            });

            return;
        }

        // game over
        if(this.state.squares.some(sq => sq === null)) {
            this.setState({
                message: ''
            });
        }else {
            this.setState({
                message: `Game Draw !`
            });
        }

        return;
    }

    playAgain = () => {
        this.setState({
            currentStatus: 'X',
            squares: Array(9).fill(null),
            message: ''
        });
    }

    render() {
        return(
            <div className="board">
                <div className="status">Next player: {this.state.currentStatus}</div>
                <div className="board-row">
                    { [0,1,2].map( (num,i) => <Square key={i} num={num} status={this.state.squares[num]} changePlayer={this.changePlayer} /> ) }
                </div>
                <div className="board-row">
                    { [3,4,5].map( (num,i) => <Square key={i} num={num} status={this.state.squares[num]} changePlayer={this.changePlayer} /> ) }
                </div>
                <div className="board-row">
                    { [6,7,8].map( (num,i) => <Square key={i} num={num} status={this.state.squares[num]} changePlayer={this.changePlayer} /> ) }
                </div>
                <h3>{this.state.message}</h3>
                <div className="board-row" style={{'justifyContent': 'center'}}>
                    <button className="again" onClick={() => this.playAgain()}>Play Again !</button>
                </div>
            </div>
        );
    }
}

export default Board;
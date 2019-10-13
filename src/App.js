import React, { Component } from 'react';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      title: "Tic Tac Toe in React",
      cellStates: ["", "", "", "", "", "", "", "", ""],
      currPlayer: "X",
      gameFinished: false,
    };
  }

  changeCellState(e) {
    let cellId = e.target.dataset.cellId;
    var newCellStates = this.state.cellStates;

    if (this.state.cellStates[cellId] === "") {
      newCellStates[cellId] = this.state.currPlayer;
      this.setState({cellStates: newCellStates})

      this.toggleCurrentPlayer();
      this.checkWinCondition();
    }
  }

  toggleCurrentPlayer() {
    this.setState({currPlayer: (this.state.currPlayer === "X" ? "O" : "X")})
  }

  checkWinCondition() {
    let cellStates = this.state.cellStates;

    if (this.state.gameFinished)
      return null;

    if (!cellStates.includes("")) {
        this.setState(
          {
            title: "Draw",
            gameFinished: true
          }
        );
      }
    
    if (
        (cellStates[0] === cellStates[1] && cellStates[1] === cellStates[2] && cellStates[2] !== "") ||
        (cellStates[3] === cellStates[4] && cellStates[4] === cellStates[5] && cellStates[5] !== "") ||
        (cellStates[6] === cellStates[7] && cellStates[7] === cellStates[8] && cellStates[8] !== "") ||

        (cellStates[0] === cellStates[3] && cellStates[3] === cellStates[6] && cellStates[6] !== "") ||
        (cellStates[1] === cellStates[4] && cellStates[4] === cellStates[7] && cellStates[7] !== "") ||
        (cellStates[2] === cellStates[5] && cellStates[5] === cellStates[8] && cellStates[8] !== "") ||

        (cellStates[0] === cellStates[4] && cellStates[4] === cellStates[8] && cellStates[8] !== "") ||
        (cellStates[2] === cellStates[4] && cellStates[4] === cellStates[6] && cellStates[6] !== "")
    ) {
      this.setState(
        {
          title: "Player " + this.state.currPlayer + " won!",
          gameFinished: true
        }
      );
    }
  }

  resetGame() {
    this.setState(
      {
        title: "Tic Tac Toe in React",
        cellStates: ["", "", "", "", "", "", "", "", ""],
        currPlayer: "X",
        gameFinished: false,
      }
    );
  }


  render() {
    return (
      <div className="app">
  <h1 className="title">{ this.state.title } { this.state.gameFinished ? ResetButton.bind(this)() : null }</h1>
        <div className="frame-center">
          <main className="grid">
            { renderGridCells.bind(this)() }
          </main>
        </div>

        <aside className="currentPlayer">
          <span className="currentPlayer__title">Current Player</span>
          <div><CellIcon state={this.state.currPlayer} /></div>
        </aside>
      </div>
    );
  }
}

export default App;

function renderGridCells() {
  var cells = [];
  for (var cellId = 0; cellId < 9; cellId++) {
    cells.push(<div className="cell" onClick={ (e) => {this.changeCellState(e)} } data-cell-id={cellId} key={ cellId }><CellIcon state={ this.state.cellStates[cellId] } /></div>);
  }
  return cells;
}

const CellIcon = ({ state }) => {
  if (state === "X") {
    return(
      <FontAwesomeIcon className="cell--x" icon={faTimes} />
    );
  }
  else if (state === "O") {
    return(
      <FontAwesomeIcon className="cell--o" icon={faCircle} />
    );
  }
  else {
    return null;
  }
}

function ResetButton() {
  console.dir(this);
  return (
    <button onClick={ this.resetGame.bind(this) }>Play Again</button>
  );
}

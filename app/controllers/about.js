import Ember from 'ember';
import { tracked } from '@glimmer/tracking';
import { inject as injectService } from '@ember/service';
import fetch from 'fetch';
export default Ember.Controller.extend({
  home: injectService(),
  playerTurn: tracked({ value: 'false' }),
  playerX: [],
  playerO: [],
  boardSelection: [],
  winner: '',
  winSuggestion: [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7'],
  ],
  init() {
    this._super(...arguments);
    this.player();
    fetch(`http://localhost:3000/articles`, {
      mode: 'no-cors',
      method: 'get',
    }).then(response => {
      console.log(response);
    })
  },
  player() {
    this.playerTurn =
      this.clickedBefore == true ? this.playerTurn : !this.playerTurn;
  },
  foundWin() {
    if (
      this.winSuggestion
        .map((x) => x.every((v) => this.playerO.includes(v)))
        .includes(true)
    ) {
      // this.winner = 'O';
      this.playerO = [];
      alert('The Winner is O')
      return (window.location.href = '/about');
    }
    if (
      this.winSuggestion
        .map((x) => x.every((v) => this.playerX.includes(v)))
        .includes(true)
    ) {
      // this.winner = 'X';
      this.playerX = [];
      alert('The Winner is X');
      return (window.location.href = '/about');
    }
  },

  actions: {
    handleClick(event) {
      this.boardSelection.push(event.target.id);
      if (
        this.boardSelection.length > 1 &&
        this.boardSelection.filter((x) => x == event.target.id).length == 2
      ) {
        this.clickedBefore = true;
        this.boardSelection.pop();
        return false;
      }
      if (this.playerTurn == false) {
        this.playerO.push(event.target.id);
        event.target.innerHTML = this.playerTurn === false ? 'O' : 'X';
        this.clickedBefore = false;
        this.player();
      } else {
        this.playerX.push(event.target.id);
        event.target.innerHTML = this.playerTurn === true ? 'X' : 'O';
        this.clickedBefore = false;
        this.player();
      }
      if (this.playerO.length >= 3 || this.playerX.length >= 3) {
        this.foundWin();
      }
    },
  },
});

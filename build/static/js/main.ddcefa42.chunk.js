(this["webpackJsonptic-tac-toe-react-100daysofcode"]=this["webpackJsonptic-tac-toe-react-100daysofcode"]||[]).push([[0],{14:function(e,t,a){e.exports=a(26)},19:function(e,t,a){},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(6),s=a.n(c),l=(a(19),a(7)),r=a(8),o=a(12),u=a(9),h=a(13),m=(a(20),a(3)),d=a(10),y=a(11),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={title:"Tic Tac Toe in React",cellStates:["","","","","","","","",""],currPlayer:"X",gameFinished:!1},a}return Object(h.a)(t,e),Object(r.a)(t,[{key:"changeCellState",value:function(e){var t=e.target.dataset.cellId,a=this.state.cellStates;""===this.state.cellStates[t]&&(a[t]=this.state.currPlayer,this.setState({cellStates:a}),this.toggleCurrentPlayer(),this.checkWinCondition())}},{key:"toggleCurrentPlayer",value:function(){this.setState({currPlayer:"X"===this.state.currPlayer?"O":"X"})}},{key:"checkWinCondition",value:function(){var e=this.state.cellStates;if(this.state.gameFinished)return null;e.includes("")||this.setState({title:"Draw",gameFinished:!0}),(e[0]===e[1]&&e[1]===e[2]&&""!==e[2]||e[3]===e[4]&&e[4]===e[5]&&""!==e[5]||e[6]===e[7]&&e[7]===e[8]&&""!==e[8]||e[0]===e[3]&&e[3]===e[6]&&""!==e[6]||e[1]===e[4]&&e[4]===e[7]&&""!==e[7]||e[2]===e[5]&&e[5]===e[8]&&""!==e[8]||e[0]===e[4]&&e[4]===e[8]&&""!==e[8]||e[2]===e[4]&&e[4]===e[6]&&""!==e[6])&&this.setState({title:"Player "+this.state.currPlayer+" won!",gameFinished:!0})}},{key:"resetGame",value:function(){this.setState({title:"Tic Tac Toe in React",cellStates:["","","","","","","","",""],currPlayer:"X",gameFinished:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement("h1",{className:"title"},this.state.title," ",this.state.gameFinished?E.bind(this)():null),i.a.createElement("div",{className:"frame-center"},i.a.createElement("main",{className:"grid"},v.bind(this)())),i.a.createElement("aside",{className:"currentPlayer"},i.a.createElement("span",{className:"currentPlayer__title"},"Current Player"),i.a.createElement("div",null,i.a.createElement(g,{state:this.state.currPlayer}))))}}]),t}(n.Component);function v(){for(var e=this,t=[],a=0;a<9;a++)t.push(i.a.createElement("div",{className:"cell",onClick:function(t){e.changeCellState(t)},"data-cell-id":a,key:a},i.a.createElement(g,{state:this.state.cellStates[a]})));return t}var g=function(e){var t=e.state;return"X"===t?i.a.createElement(m.a,{className:"cell--x",icon:d.a}):"O"===t?i.a.createElement(m.a,{className:"cell--o",icon:y.a}):null};function E(){return console.dir(this),i.a.createElement("button",{onClick:this.resetGame.bind(this)},"Play Again")}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.ddcefa42.chunk.js.map
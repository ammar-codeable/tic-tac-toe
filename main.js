import "./src/style.css";
import { setCellState, switchPlayerTurn } from "./src/change-turn.js";
import { checkWin } from "./src/end-game.js";

let playerTurn;
let boardState;

export function setClickEvents(el) {
	playerTurn === "X"
		? (setCellState(el.target, playerTurn, boardState),
		  checkWin(playerTurn, boardState)
				? (playerTurn = switchPlayerTurn(playerTurn))
				: null)
		: (setCellState(el.target, playerTurn, boardState),
		  checkWin(playerTurn, boardState)
				? (playerTurn = switchPlayerTurn(playerTurn))
				: null);
}

function initializeNewGame() {
	playerTurn = "X";
	boardState = new Array(9).fill("");
	document.querySelector("#app").innerHTML = `
	    	<div id="game-container">
	    		<h1>TicTacToe</h1>
	    		<div id="board">
	                <div class="board__cell empty" data-cell=0></div>
	                <div class="board__cell empty" data-cell=1></div>
	                <div class="board__cell empty" data-cell=2></div>
	                <div class="board__cell empty" data-cell=3></div>
	                <div class="board__cell empty" data-cell=4></div>
	                <div class="board__cell empty" data-cell=5></div>
	                <div class="board__cell empty" data-cell=6></div>
	                <div class="board__cell empty" data-cell=7></div>
	                <div class="board__cell empty" data-cell=8></div>
	    		</div>
	    		<div id="player-turn-indicator">Player X's Turn</div>
	            <button id="restart-button">Restart Game</button>
	    	</div>
	    `;

	document.querySelectorAll(".board__cell").forEach((cell) => {
		cell.addEventListener("click", setClickEvents);
	});

	document
		.querySelector("#restart-button")
		.addEventListener("click", initializeNewGame);
}

initializeNewGame();

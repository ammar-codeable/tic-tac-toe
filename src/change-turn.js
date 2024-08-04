import { setClickEvents } from "../main.js";

export function setCellState(cell, playerTurn, boardState) {
	boardState[cell.dataset.cell] = playerTurn;
	cell.innerText = playerTurn;
	cell.classList.add("played");
	cell.removeEventListener("click", setClickEvents);
}

export function switchPlayerTurn(playerTurn) {
	playerTurn === "X" ? (playerTurn = "O") : (playerTurn = "X");
	document.querySelector(
		"#player-turn-indicator"
	).innerText = `Player ${playerTurn}'s Turn`;
	return playerTurn;
}

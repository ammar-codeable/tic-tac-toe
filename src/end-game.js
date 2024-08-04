import { setClickEvents } from "../main.js";

export function checkWin(playerTurn, boardState) {
	let continueGame = true;
	if (!boardState.includes("")) {
		endGame(playerTurn, "draw");
		continueGame = false;
	}
	const possibleWins = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8], // rows
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8], // columns
		[0, 4, 8], // diagonals
		[2, 4, 6],
	];

	possibleWins.forEach((win) => {
		boardState[win[0]] === playerTurn &&
		boardState[win[1]] === playerTurn &&
		boardState[win[2]] === playerTurn
			? (endGame(playerTurn, "win"), (continueGame = false))
			: null;
	});
	return continueGame;
}

function endGame(playerTurn, result) {
	if (result === "win") {
		document.querySelector(
			"#player-turn-indicator"
		).innerText = `Player ${playerTurn} Wins!!!!!`;
		document.querySelectorAll(".board__cell").forEach((cell) => {
			cell.removeEventListener("click", setClickEvents);
		});
	} else {
		document.querySelector(
			"#player-turn-indicator"
		).innerText = `It's a draw...`;
	}
	document.querySelectorAll(".board__cell").forEach((cell) => {
		cell.classList.remove("empty");
	});
	document.querySelector("#restart-button").focus();												
}

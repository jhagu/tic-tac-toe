import React from 'react';

const SavedGame = (props) => {
	if (localStorage.getItem("cells")) {
		return (
			<div>
				<p>Game save</p>
				<ul>
					<li>Cells: {JSON.parse(localStorage.getItem("cells"))}</li>
					<li>Message: {localStorage.getItem("message")}</li>
					<li>There is a winner?: {JSON.parse(localStorage.getItem("isWinner")) ? 'YES!' : 'NO'}</li>
				</ul>
				<button onClick={props.handleLoad}>Load</button>
			</div>
		)
	}
}

export default SavedGame
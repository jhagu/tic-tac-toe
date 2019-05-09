import React from 'react';
import Aclarations from './Aclarations';
import Cell from './Cell';
import Header from './Header';
import { checkWinningConditions, computerMoves, humanMove } from '../utils/gameRules';
import SavedGame from './SavedGame';
import SelectMark from './SelectMark';

export default class Board extends React.Component {
	state = {
		cells: Array(9).fill(null),
		message: 'No winner yet',
		isWinner: false,
		characterPlayer: "X"
	}

	handleReset = () => {
		this.setState(() => ({
			cells: Array(9).fill(null),
			isWinner: false,
			message: 'No winner yet',
			characterPlayer: "X"
		}));
	}

	handleSave = () => {
		localStorage.setItem("cells", JSON.stringify(this.state.cells));
		localStorage.setItem("message", this.state.message);
		localStorage.setItem("isWinner", JSON.stringify(this.state.isWinner));
		this.setState(() => ({
			cells: JSON.parse(localStorage.getItem("cells")),
			message: localStorage.getItem("message"),
			isWinner: JSON.parse(localStorage.getItem("isWinner"))
		}));
	};

	handleLoad = () => {
		this.setState(() => ({
			cells: JSON.parse(localStorage.getItem("cells")),
			message: localStorage.getItem("message"),
			isWinner: JSON.parse(localStorage.getItem("isWinner"))
		}));
	};

	handleOptionChange = (e) => {
		let value = e.target.value;
		this.setState(() => ({ characterPlayer: value }));
	};

	handleClick = (i) => {
		const cells = this.state.cells.slice();
		if (cells[i] != null) {
			this.setState(() => ({
				message: 'This cell is filled!!'
			}));
		} else if (this.state.isWinner == false) {
			humanMove(i, cells, this.state.characterPlayer);
			if (checkWinningConditions(cells)) {
				this.setState(() => ({ cells, message: 'Human wins!', isWinner: true }));
			}
			else {
				computerMoves(cells, this.state.characterPlayer);
				if (checkWinningConditions(cells)) {
					this.setState(() => ({ cells, message: 'Computer wins!', isWinner: true }));
				}
			}
			this.setState(() => ({ cells }));
		}
	};

	renderCell = (i) => {
		return (
			<Cell value={this.state.cells[i]} handleClick={() => this.handleClick(i)} />
		)
	}

	render() {
		return (
			<div>
				<Header />
				<Aclarations />
				<SelectMark characterPlayer={this.state.characterPlayer} handleOptionChange={this.handleOptionChange} />
				{localStorage.getItem("cells") && <SavedGame handleLoad={this.handleLoad}/>}
				<div>
					<table>
						<tbody>
							<tr>
								{this.renderCell(0)}{this.renderCell(1)}{this.renderCell(2)}
							</tr>
							<tr>
								{this.renderCell(3)}{this.renderCell(4)}{this.renderCell(5)}
							</tr>
							<tr>
								{this.renderCell(6)}{this.renderCell(7)}{this.renderCell(8)}
							</tr>
						</tbody>
					</table>
				</div>
				<p>{this.state.message}</p>
				<div>
					<button onClick={this.handleReset}>Reset</button>
					<button onClick={this.handleSave}>Save</button>
				</div>
			</div>
		)
	}

}
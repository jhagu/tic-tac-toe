import React from 'react';

const Aclarations = () => (
	<div>
		<p>Aclarations:</p>
		<ol>
			<li>Human player (HP) will be X</li>
			<li>Computer (C) will be O</li>
			<li>HP always moves first (for now)</li>
		</ol>
		<p>Once the HP put a X, the app calculates a random number used as a index for a empty cell and makes the C put an O.</p>
		<p>This procces will be reapeated until the app finds a winner or the game finish with a draw.</p>
	</div>
);

export default Aclarations;
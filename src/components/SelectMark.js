import React from 'react';

const SelectMark = (props) => (
	<div>
		<div>Select your mark</div>
		<select value={props.characterPlayer} onChange={(e) => props.handleOptionChange(e)}>
			<option value="X" defaultValue>X</option>
			<option value="O">O</option>
		</select>
	</div>
);

export default SelectMark;
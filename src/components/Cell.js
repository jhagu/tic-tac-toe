import React from 'react';

const styles = {
	border: '1px solid black',
	width: '32px', height: '32px',
	verticalAlign: 'center',
	textAlign: 'center'
}

const Cell = (props) => (
	<td style={styles} onClick={props.handleClick}> {props.value} </td>
);

export default Cell;


import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li class='list-group-item d-flex justify-content-between align-items-center'>
			<div>
				{props.name}
				{/* <span style={{ marginLeft: 30,width: 30, border:'1px solid black', borderRadius: 2, backgroundColor: props.category.colour}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>	 */}
			</div>	
			<div style={{display: 'flex', justifyContent: 'space-between', width: 120}}>
				<span style={{width: 30, border:'1px solid black', borderRadius: 2, backgroundColor: props.category.colour}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>	
				<div>
					<span class='badge badge-primary badge-pill mr-3' style={{color:'black', fontSize: 16, fontWeight: 'lighter'}}>£<span>{props.cost}</span></span>
					<TiDelete size='1.5em' onClick={handleDeleteExpense} />
				</div>	
			</div>
		</li>
	);
};

export default ExpenseItem;

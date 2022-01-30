import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import { useState } from 'react';

const ExpenseItem = (props) => {

	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated!');
		alert(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<button onClick={clickHandler}>change title</button>
				<div className="expense-item__price" >${props.amount}</div>
			</div>
		</Card>
	);
}


export default ExpenseItem;

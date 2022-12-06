import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item_discription'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

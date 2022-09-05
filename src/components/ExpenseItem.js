import "./ExpenseItem.css";

function ExpenseItem(props) {
  // Hard-coded data for the beginning
  /*
  const expenseDate = new Date(2022, 8, 6);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  */

  const dateOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        {props.date.toLocaleDateString("en-GB", dateOptions)}
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

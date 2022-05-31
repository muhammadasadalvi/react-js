import './newExpense.css'
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const saveExepnseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        console.log(expenseData);
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExepnseDataHandler} />
        </div>
    );
}

export default NewExpense;
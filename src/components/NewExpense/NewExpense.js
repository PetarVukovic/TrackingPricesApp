import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense=(props)=>{

    const[isEditing,setIsEditing]=useState(false);

    const saveExpenseDateHandler=enteredExpenseDate=>{
        const expenseDate={
              ...enteredExpenseDate,
                id:Math.random().toString
            }
            props.onAddExpense(expenseDate);
            setIsEditing(false);
        }
        const startEditingHandler=()=>{
            setIsEditing(true);
        }
        const stopeEditingHandler=()=>{
            setIsEditing(false);
        }
    return(
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}> Add New Expenses</button>}
           {isEditing && <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} onCancel={stopeEditingHandler}/>}
        </div>
    );
}

export default NewExpense;
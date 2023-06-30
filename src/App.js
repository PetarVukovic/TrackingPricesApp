import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMM_EXPENSES = [
  {
    id:1,
    title: "Toilet paper",
    amount: 231.76,
    date: new Date(2021, 2, 21),
  },
  {
    id:2,
    title: "New TV",
    amount: 120.76,
    date: new Date(2020, 5, 2),
  },
  {
    id:3,
    title: "New desk",
    amount: 22.12,
    date: new Date(2011, 9, 1),
  },
  {
    id:4,
    title: "Car Insurance",
    amount: 199.76,
    date: new Date(2019, 0, 21),
  },
];

const App=() =>{
  const [expenses,setExpenses]=useState(DUMM_EXPENSES);

  const onAddExpenseHandler=expense=>{
    setExpenses(prevExpenses=>{
      return [expense,...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
  /* return React.createElement('div', {}, 
   React.createElement('h2',{}, 'Lets get started!'),
   React.createElement(Expenses,{items: expenses}),
   );*/
}

export default App;

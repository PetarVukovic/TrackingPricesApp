import React from "react";
import Expenses from "./components/Expenses/Expenses";


const App=() =>{
  const expenses = [
    {
      title: "Toilet paper",
      amount: 231.76,
      date: new Date(2021, 2, 21),
    },
    {
      title: "New TV",
      amount: 120.76,
      date: new Date(2020, 5, 2),
    },
    {
      title: "New desk",
      amount: 22.12,
      date: new Date(2011, 9, 1),
    },
    {
      title: "Car Insurance",
      amount: 199.76,
      date: new Date(2019, 0, 21),
    },
  ];
  return (
    <div>
      <h2 >Lets get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
  /* return React.createElement('div', {}, 
   React.createElement('h2',{}, 'Lets get started!'),
   React.createElement(Expenses,{items: expenses}),
   );*/
}

export default App;

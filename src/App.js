import ExpensionItem from "./components/ExpenseItem";
function App() {
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
      <h2>Let's get started!</h2>
      <ExpensionItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
       <ExpensionItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
         <ExpensionItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
         <ExpensionItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;

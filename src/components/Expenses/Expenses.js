import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangedHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //Filter vraca novi array.Ova const vratit ce true ako je date iz objecta u array isti kao i selected
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveYears={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList items={filteredExpenses}  />
      </Card>
    </div>
  );
};
export default Expenses;


import Expenses from "./components/Expenses";

function App(){
  const obj=[
    {
      title: "Toilet paper",
      amount: 231.76,
      date: new Date(2021, 2, 21),
    },
    {
      title: "New TV",
       amount: 120.76,
      date: new Date(2020, 5, 2),
    }
  ];
  return(
    <Expenses item={obj}/>

  );
}
export default App; 
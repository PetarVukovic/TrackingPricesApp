
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
    <div>
      <h2>Lets get started!</h2>
      <Expenses item={obj}/>
    </div>
  );
}
export default App; 
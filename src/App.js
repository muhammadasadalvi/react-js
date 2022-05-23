import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(),
      title: "car insurance",
      amount: 878.09
    },
    {
      id: 'e2',
      date: new Date(),
      title: "home insurance",
      amount: 8988.09
    }
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

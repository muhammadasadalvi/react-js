import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
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
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const onExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={onExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

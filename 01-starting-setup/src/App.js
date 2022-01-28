import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.css"

const App = () => {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 2344.5,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 2334.5,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 234.5,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Phone',
      amount: 23499.5,
      date: new Date(2021, 2, 28)
    }
  ];


  return (
    <div>
      < Expenses className="expenses" items={expenses} />
    </div>

  );
}

export default App;

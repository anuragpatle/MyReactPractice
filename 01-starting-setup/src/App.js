import ExpenseItem from './components/ExpenseItem';

function App() {

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
      <h2>Let's get --- started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} ></ExpenseItem>
      <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} ></ExpenseItem>

    </div>
  );
}

export default App;

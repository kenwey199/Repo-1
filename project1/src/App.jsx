import React, { useRef, useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const newValue = useRef();

  const deposit = () => {
    const amount = +newValue.current.value;
    if (amount > 0) {
      setBalance(balance + amount);
      addTransaction('Deposit', amount);
    }
  };

  const withdraw = () => {
    const amount = +newValue.current.value;
    if (amount > 0 && balance >= amount) {
      setBalance(balance - amount);
      addTransaction('Withdraw', amount);
    } else {
      alert('Low balance');
    }
  };

  const addTransaction = (type, amount) => {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now(), type, amount },
    ]);
  };

  const deleteTransaction = (id) => {
    const transactionToDelete = transactions.find(
      (transaction) => transaction.id === id
    );
    
    if (transactionToDelete) {
      if (transactionToDelete.type === 'Deposit') {
        setBalance(balance - transactionToDelete.amount);
      } else if (transactionToDelete.type === 'Withdraw') {
        setBalance(balance + transactionToDelete.amount);
      }
      
      setTransactions((prevTransactions) =>
        prevTransactions.filter((transaction) => transaction.id !== id)
      );
    }
  };

  return (
    <div>
      <h1>The balance is: {balance}</h1>
      <input ref={newValue} type="number" placeholder="Enter amount" />
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>

      {transactions.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>
                  <button onClick={() => deleteTransaction(transaction.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
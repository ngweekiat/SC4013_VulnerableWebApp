import React, { useState, useEffect } from 'react';
import './Transactions.css';

function Transactions() {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  // Fetch all transactions on page load
  useEffect(() => {
    const fetchAllTransactions = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/transactions`);
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setTransactions(data.transactions);
        }
      } catch (err) {
        setError('An error occurred while fetching transactions.');
      }
    };

    fetchAllTransactions();
  }, []);

  // Handle the search
  const handleSearch = async () => {
    setError('');
    try {
      const response = await fetch(`http://localhost:4000/api/transactions?account_number=${accountNumber}`);
      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setTransactions(data.transactions);
      }
    } catch (err) {
      setError('An error occurred while fetching transactions.');
    }
  };

  return (
    <div className="transactions-container">
      <h1>Transaction History</h1>
      <input
        type="text"
        placeholder="Enter Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        className="input"
      />
      <button onClick={handleSearch} className="fetch-button">Fetch Transactions</button>

      {error && <p className="error">{error}</p>}

      <div className="transactions-list">
        {transactions.length > 0 ? (
          transactions.map((txn, index) => {
            // Check if the row is from the transactions or users table (injected data)
            if (txn.username) {
              // If it contains 'username', it is from injected data (users table)
              return (
                <div key={index} className="transaction-item">
                  <p><strong>Username:</strong> {txn.username}</p>
                  <p><strong>Password Hash:</strong> {txn.password_hash}</p>
                  <p><strong>Account Number:</strong> N/A</p>
                  <p><strong>Date:</strong> N/A</p>
                  <p><strong>Time:</strong> N/A</p>
                  <p><strong>Amount:</strong> N/A</p>
                </div>
              );
            } else {
              // Regular transaction data
              const amount = txn.amount ? txn.amount.toFixed(2) : 'N/A';
              const [date, time] = txn.transaction_date ? txn.transaction_date.split('T') : ['N/A', 'N/A'];
              
              return (
                <div key={index} className="transaction-item">
                  <p><strong>Sender Account:</strong> {txn.sender_account || 'N/A'}</p>
                  <p><strong>Account Number:</strong> {txn.receiving_account || 'N/A'}</p>
                  <p><strong>Date:</strong> {date}</p>
                  <p><strong>Time:</strong> {time}</p>
                  <p><strong>Amount:</strong> ${amount}</p>
                </div>
              );
            }
          })
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;

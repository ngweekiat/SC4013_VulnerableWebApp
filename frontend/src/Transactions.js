import React, { useState, useEffect } from 'react';
import './Transactions.css';

function Transactions() {
  const [accountNumber, setAccountNumber] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

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
          transactions.map((txn, index) => (
            <div key={index} className="transaction-item">
              <p><strong>Sender Account:</strong> {txn.sender_account || 'N/A'}</p>
              <p><strong>Receiving Account:</strong> {txn.receiving_account || 'N/A'}</p>
              <p><strong>Date:</strong> {txn.transaction_date || 'N/A'}</p>
              <p><strong>Time:</strong> {txn.transaction_time || 'N/A'}</p>
              <p><strong>Amount:</strong> ${txn.amount ? txn.amount.toFixed(2) : 'N/A'}</p>
            </div>
          ))
        ) : (
          <p>No transactions found.</p>
        )}
      </div>
    </div>
  );
}

export default Transactions;

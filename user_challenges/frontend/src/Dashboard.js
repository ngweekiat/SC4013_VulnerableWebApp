import React from 'react';
import './Dashboard.css';

function BankingDashboard() {
  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <img src="/images/logo.png" alt="Bank Logo" className="dashboard-logo" />
        <nav className="dashboard-nav">
          <a href="#">Home</a>
          <a href="#">Accounts</a>
          <a href="#">Investments</a>
          <a href="#">Loans</a>
          <a href="#">Settings</a>
        </nav>
        <button className="logout-button">Logout</button>
      </header>

      {/* Welcome Message */}
      <section className="dashboard-welcome">
        <h1>Welcome Back, User</h1>
        <p>Here’s your account summary and recent activity.</p>
      </section>

      {/* Account Summary */}
      <section className="dashboard-summary">
        <div className="summary-card">
          <i className="fas fa-university card-icon"></i>
          <h3>Checking Account</h3>
          <p>Balance: $12,300</p>
        </div>

        <div className="summary-card">
          <i className="fas fa-piggy-bank card-icon"></i>
          <h3>Savings Account</h3>
          <p>Balance: $18,450</p>
        </div>

        <div className="summary-card">
          <i className="fas fa-chart-line card-icon"></i>
          <h3>Investments</h3>
          <p>Portfolio Value: $52,000</p>
        </div>

        <div className="summary-card">
          <i className="fas fa-credit-card card-icon"></i>
          <h3>Credit Card</h3>
          <p>Balance: $3,200</p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="quick-access">
        <h2>Quick Access</h2>
        <div className="access-icons">
          <div className="access-item">
            <i className="fas fa-money-check-alt"></i>
            <span>Transfer</span>
          </div>
          <div className="access-item">
            <i className="fas fa-receipt"></i>
            <span>Transactions</span>
          </div>
          <div className="access-item">
            <i className="fas fa-coins"></i>
            <span>Deposit</span>
          </div>
          <div className="access-item">
            <i className="fas fa-comments-dollar"></i>
            <span>Pay Bills</span>
          </div>
          <div className="access-item">
            <i className="fas fa-user-plus"></i>
            <span>Add Beneficiary</span>
          </div>
          <div className="access-item">
            <i className="fas fa-file-invoice-dollar"></i>
            <span>Loan Applications</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BankingDashboard;

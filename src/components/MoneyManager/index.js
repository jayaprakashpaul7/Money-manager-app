import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: 0,
    type: transactionTypeOptions[0].displayText,
    transactions: [],
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onDelete = id => {
    const {transactions} = this.state
    const filter = transactions.filter(transaction => transaction.id !== id)
    this.setState({
      transactions: filter,
    })
  }

  addTransaction = event => {
    const {title, amount, type} = this.state
    event.preventDefault()
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      transactions: [...prevState.transactions, newTransaction],
      title: '',
      amount: '',
    }))
  }

  income1 = () => {
    const {transactions} = this.state
    const filterIncome = transactions
      .filter(eachTransact => eachTransact.type === 'Income')
      .reduce(
        (total, eachTransact) => total + parseFloat(eachTransact.amount),
        0,
      )
    return filterIncome
  }

  expenses1 = () => {
    const {transactions} = this.state
    const filterExpense = transactions
      .filter(eachTransact => eachTransact.type === 'Expenses')
      .reduce((total, eachTransact) => total + eachTransact.amount, 0)
    return filterExpense
  }

  render() {
    const {title, amount, transactions} = this.state
    const income = this.income1()
    const expenses = this.expenses1()
    const balance = parseInt(income) - parseInt(expenses)
    return (
      <div className="bg">
        <div className="app-bg">
          <div className="name-bg">
            <h1 className="name">Hi, Richard</h1>
            <p className="greet">
              Welcome back to your
              <span className="app-name">Money Manager</span>
            </p>
          </div>

          <ul className="money-details-container">
            <MoneyDetails
              key={uuidv4()}
              income={income}
              expenses={expenses}
              balance={balance}
              transactions={transactions}
            />
          </ul>
          <div className="form-transaction-c">
            <form>
              <h1 className="add-transaction-heading">Add Transaction</h1>

              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                onChange={this.onChangeTitle}
                value={title}
                placeholder="TITLE"
              />

              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                onChange={this.onChangeAmount}
                value={amount}
                placeholder="AMOUNT"
              />

              <label htmlFor="Type">Type</label>
              <select onChange={this.onChangeType}>
                <option
                  value={transactionTypeOptions[0].displayText}
                  id={transactionTypeOptions[0].optionId}
                >
                  Income
                </option>
                <option
                  value={transactionTypeOptions[1].displayText}
                  id={transactionTypeOptions[1].optionId}
                >
                  Expenses
                </option>
              </select>
              <button
                onClick={this.addTransaction}
                type="submit"
                className="add-btn"
              >
                Add
              </button>
            </form>

            <ul className="table-c">
              <h1>History</h1>
              <li className="table-header">
                <p className="table-header-cell title-column">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {transactions.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transactionDetails={transaction}
                  Delete={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager

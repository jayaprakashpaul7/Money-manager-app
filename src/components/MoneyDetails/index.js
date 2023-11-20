// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses, balance} = props

  return (
    <>
      <li className="li-item balance-bg">
        <div className="item-c">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
          <div className="text-container">
            <p className="your">Your Balance</p>
            <p data-testid="balanceAmount">Rs {balance}</p>
          </div>
        </div>
      </li>
      <li className="income-bg">
        <div className="item-c">
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
          <div className="text-container">
            <p className="your">Your Income</p>
            <p data-testid="incomeAmount">Rs {income}</p>
          </div>
        </div>
      </li>

      <li className="expenses-bg">
        <div className="item-c">
          <img
            className="img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <div className="text-container">
            <p className="your">Your Expenses</p>
            <p data-testid="expensesAmount">Rs {expenses}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails

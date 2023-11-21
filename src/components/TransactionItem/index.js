import './index.css'

const TransactionItem = props => {
  const {transactionDetails, Delete} = props
  const {id, title, amount, type} = transactionDetails
  const onDelete = () => {
    Delete(id)
  }
  return (
    <li className="table-row">
      <div className="table-cell">
        <p className="title-column">{title}</p>
      </div>
      <div className="table-cell">
        <p>Rs {amount}</p>
      </div>
      <div className="table-cell">
        <p>{type}</p>
      </div>
      <button onClick={onDelete} className="del-btn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          data-testid="delete"
          className="del-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem

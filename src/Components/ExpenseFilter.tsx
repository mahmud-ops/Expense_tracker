interface Props {
    onSelectCategory : (category : string) => void;
}

const ExpenseFilter = ({onSelectCategory}:Props) => {
  return (
    <div>
        <select onChange={(event) => onSelectCategory(event.target.value)}>
            <option value="">All categories</option>
            <option value="Grocery">Grocery</option>
            <option value="Utility">Utility</option>
            <option value="Entertainment">Entertainment</option>
        </select>
    </div>
  )
}

export default ExpenseFilter
interface Expense{
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props{
    expenses: Expense[];
    onDelete: (id: number) => void;
}


const ExpenseList = ({expenses , onDelete}:Props) => {
    if(expenses.length == 0) return null;
  

    return (
    <>
        <table className="border">
            <thead className="bg-gray-200">
                <tr>
                    <th className="p-2">Description</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Category</th>
                    <th className="p-2"></th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td className="p-2 border-b border-gray-400">{expense.description}</td>
                            <td className="p-2 border-b border-gray-400">{expense.amount}</td>
                            <td className="p-2 border-b border-gray-400">{expense.category}</td>
                            <td className="p-2 border-b border-gray-400">
                                <button
                                    onClick={() => onDelete(expense.id)}
                                    className="text-red-400 font-bold border-2 p-1 rounded-lg border-red-400
                                hover:bg-red-400 hover:text-white transition-colors">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
            <tfoot>
                <tr className="font-extrabold">
                    <td className="p-2 border-b border-gray-400">Total</td>
                    <td className="p-2 border-b border-gray-400">
                       ${expenses.reduce((acc,expense) => acc + expense.amount , 0).toFixed(2)}
                    </td>
                </tr>
            </tfoot>
        </table>
    </>
  )
}

export default ExpenseList
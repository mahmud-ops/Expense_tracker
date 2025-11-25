import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";
import ExpenseForm from "./Components/ExpenseForm";


const styles = {
  container : "m-3 w-fit border p-3 rounded-lg",
}


const App = () => {
  const [selectedCategory,setSelectedCategory] = useState("");
  const [expense_list, setExpenseList] = useState([
    { id: 1, description: "Apple", amount: 10, category: "Grocery" },
    { id: 2, description: "Electricity bill", amount: 10, category: "Utility" },
    { id: 3, description: "Book", amount: 10, category: "Entertainment" },
    { id: 4, description: "Charger", amount: 10, category: "Utility" },
    { id: 5, description: "Battery", amount: 10, category: "Utility" },
  ]);

  const visibleExpenses = selectedCategory ? expense_list.filter(e => e.category === selectedCategory) : expense_list;

  return (
    <div>
      <ExpenseForm onSubmit={expense => setExpenseList([...expense_list,{...expense,id:expense_list.length + 1}])}/>
      <div className={styles.container}>
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <div className="m-3">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) =>
            setExpenseList(expense_list.filter((e) => e.id !== id))
          }
        />
      </div>
      ;
    </div>
  );
};

export default App;
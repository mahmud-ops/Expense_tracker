import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const inputStyle = "border-2 border-blue-400 m-1 p-2 rounded-lg";
const btnStyle = "bg-blue-300 p-2 rounded-lg m-2 font-bold hover:bg-blue-400";

const schema = z.object({
  description: z.string().min(3, "Too short").max(200, "Too long"),
  amount: z.number({message: "Amount is required"}).min(1, "Must be at least 1").max(10000, "Too high"),
  category: z.string().min(1, "Select a category")
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit}:Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });


  return (
    <form onSubmit={handleSubmit(data => {
      onSubmit(data);
      reset();
    })}className="m-3 border rounded-lg p-4">

      <div>
        <label>Description</label><br />
        <input
          {...register("description")}
          type="text"
          className={inputStyle}
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      {/* AMOUNT */}
      <div>
        <label>Amount</label><br />
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className={inputStyle}
        />
        {errors.amount && <p className="text-red-500">{errors.amount.message}</p>}
      </div>

      {/* CATEGORY */}
      <div>
        <label>Category</label><br />
        <select
          {...register("category")}
          className={inputStyle}
          defaultValue=""
        >
          <option value="" disabled>Select...</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        {errors.category && <p className="text-red-500">{errors.category.message}</p>}
      </div>

      <button type="submit" className={btnStyle}>Submit</button>
    </form>
  );
};

export default ExpenseForm;

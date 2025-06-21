import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default function PagePharmacy() {
  return (
    <div>
      <div className="p-3">
        <Nav />
        <TodoInput />
        <TodoList />
      </div>
      <span>Pharmacy</span>
    </div>
  );
}

import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default function PageThings() {
  return (
    <div>
      <div className="p-3">
        <Nav />
        <TodoInput />
        <TodoList />
      </div>
      <span>Things</span>
    </div>
  );
}

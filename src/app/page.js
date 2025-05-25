import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="p-3">
      <Nav />
      <TodoInput />
      <TodoList />
    </div>
  );
}

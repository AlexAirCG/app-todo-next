import Nav from "@/components/Nav";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className="p-3">
        <Nav />
        <TodoInput />
        <TodoList />
      </div>
    );
  }
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="font-extrabold text-5xl mb-3  ">
          <span>myDay24</span>
        </div>
        <span>Войдите в аккаунт для продолжения</span>
      </div>
    </div>
  );
}

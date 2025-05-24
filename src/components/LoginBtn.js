"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { RxExit } from "react-icons/rx";
import { ImEnter } from "react-icons/im";

export default function LoginBtn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="truncate m-2">{session.user.email}</div>

        <button onClick={() => signOut()} className="p-2 cursor-pointer">
          <RxExit className="hover:text-gray-400" />
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()} className="cursor-pointer">
        <ImEnter className="text-2xl hover:text-gray-400" />
      </button>
    </>
  );
}

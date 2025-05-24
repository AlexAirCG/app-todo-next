import React from "react";
import LoginBtn from "./LoginBtn";

function Nav() {
  return (
    <div id="NavBox" className="flex justify-between items-center pt-2">
      <div className="font-extrabold text-3xl">
        <span>myDay24</span>
      </div>
      <LoginBtn />
    </div>
  );
}

export default Nav;

import React from "react";
import Input from "./Input.jsx";

function Nav() {
  return (
    <header className="h-32 grid px-10">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-7">
          <img
            src="/logo/logo.png"
            alt=""
            className="w-16 aspect-square object-cover"
          />
          <Input></Input>
        </div>
        <ul className="flex text-white font-semibold gap-10">
          <li>
            <a href="#">Game</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2">
              Menu
              <svg width="25" height="25" viewBox="0 0 256 256" className="mt-1">
                <path
                  fill="currentColor"
                  d="M120 56v48a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16m80-16h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-96 96H56a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m96 0h-48a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

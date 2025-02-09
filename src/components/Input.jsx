import React from "react";

function Input() {
  return (
    <div className="flex items-center bg-zinc-800 rounded-full p-3 w-72 gap-2">
      <div>
        <svg
          className="text-[#ffffff69]"
          width="18"
          height="18"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208M208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288"
          />
        </svg>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Search..."
        className="bg-zinc-800 rounded-full w-72 px-1 placeholder:text-white placeholder:opacity-30 text-white font-semibold no-underline focus:outline-none"
      />
    </div>
  );
}

export default Input;

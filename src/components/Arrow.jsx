import React from "react";

function Arrow({ angle }) {
  return (
    <button
      className="border p-2 m-w-12 m-h-12 rounded-full grid place-content-center opacity-60"
      style={{ transform: `rotate(${angle}deg)` }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24">
        <path
          fill="white"
          d="M9.904 17.308L4.596 12l5.308-5.308l.708.72L6.523 11.5h12.88v1H6.524l4.089 4.089z"
        />
      </svg>
    </button>
  );
}

export default Arrow;

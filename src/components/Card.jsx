import React from "react";

function Card({ name, image, description, bgColor, rarity }) {
  image = name.replace(" ", "");

  return (
    <div
      className="text-white min-w-72 max-w-72 lg:max-h-80 h-96 rounded-xl p-4 z-50 items-center"
      style={{ backgroundColor: `#${bgColor}` }}
    >
      <div
        className="h-1/2 aspect-square object-contain m-auto -translate-y-20 scale-125 w-1/2"
        style={{
          backgroundImage: `url(/cards/${image}.webp)`,
          backgroundPosition: `center`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          filter: `drop-shadow(1px 1px 10px #${bgColor})`,
        }}
      ></div>
      <div className="flex justify-between items-center">
        <p className="flex font-semibold items-center">
          {name}
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M15.418 5.643a1.25 1.25 0 0 0-1.34-.555l-1.798.413a1.25 1.25 0 0 1-.56 0l-1.798-.413a1.25 1.25 0 0 0-1.34.555l-.98 1.564c-.1.16-.235.295-.395.396l-1.564.98a1.25 1.25 0 0 0-.555 1.338l.413 1.8a1.25 1.25 0 0 1 0 .559l-.413 1.799a1.25 1.25 0 0 0 .555 1.339l1.564.98c.16.1.295.235.396.395l.98 1.564c.282.451.82.674 1.339.555l1.798-.413a1.25 1.25 0 0 1 .56 0l1.799.413a1.25 1.25 0 0 0 1.339-.555l.98-1.564c.1-.16.235-.295.395-.395l1.565-.98a1.25 1.25 0 0 0 .554-1.34L18.5 12.28a1.25 1.25 0 0 1 0-.56l.413-1.799a1.25 1.25 0 0 0-.554-1.339l-1.565-.98a1.25 1.25 0 0 1-.395-.395zm-.503 4.127a.5.5 0 0 0-.86-.509l-2.615 4.426l-1.579-1.512a.5.5 0 1 0-.691.722l2.034 1.949a.5.5 0 0 0 .776-.107z"
              clipRule="evenodd"
            />
          </svg>
        </p>
        <button className="rounded-full p-2 text-xs tracking-wide translate-y-2 mb-3 min-w-16 font-medium">
          Rarity
        </button>
      </div>
      <p className="font-medium text-sm text-pretty">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
        molestias?
      </p>
    </div>
  );
}

export default Card;

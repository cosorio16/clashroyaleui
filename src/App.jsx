import React from "react";
import cards from "./data/cards";
import Banner from "./components/Banner.jsx";
import Nav from "./components/Nav.jsx";
import Arrow from "./components/Arrow.jsx";
import Card from "./components/Card.jsx";

function App() {
  const cartas = cards.map((data) =>
    data.items.map((item) => item.name).sort()
  );
  return (
    <div className="w-screen h-screen bg-black flex flex-col">
      <Nav> </Nav>
      <Banner></Banner>
      <div className="flex w-screen justify-between px-20">
        <Arrow></Arrow>
        <Arrow angle={"180"}></Arrow>
      </div>
      <div className="cards flex-grow items-end flex p-4 gap-10 overflow-x-scroll z-50 ">
        <Card name={"Balloon"} bgColor={"ce2114"}></Card>
        <Card name={"Bomber"} bgColor={"8f674d"}></Card>
        <Card name={"Royale Ghost"} bgColor={"92aef6"}></Card>
        <Card name={"Minion"} bgColor={"312633"}></Card>
      </div>
    </div>
  );
}

export default App;

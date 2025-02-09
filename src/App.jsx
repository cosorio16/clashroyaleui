import React from "react";
import cards from "./data/cards";
import Banner from "./components/Banner.jsx";
import Nav from "./components/Nav.jsx";
import Arrow from "./components/Arrow.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const cartas = cards[0].map((c) => c.name).sort();

  console.log(cartas);
  return (
    <>
      <div className="max-w-screen h-screen bg-black flex flex-col m-0 relative overflow-hidden">
        <img
          src="/cards/HealSpiritIcon.webp"
          alt=""
          className="absolute -right-40 top-32 object-cover aspect-auto w-96 z-10"
          style={{
            filter: `drop-shadow(1px 1px 10px #fee955) contrast(1.15)`,
          }}
        />
        <Nav> </Nav>
        <Banner></Banner>
        <div className="flex w-full justify-between px-20">
          <Arrow></Arrow>
          <Arrow angle={"180"}></Arrow>
        </div>
        <div className="cards flex-grow items-end flex p-4 gap-10 overflow-x-scroll">
          {/* <Card name={"Balloon"} bgColor={"ce2114"}></Card>
          <Card name={"Bomber"} bgColor={"8f674d"}></Card>
          <Card name={"Royale Ghost"} bgColor={"92aef6"}></Card>
          <Card name={"Minion"} bgColor={"312633"}></Card>
          <Card name={"Golem"} bgColor={"847363"}></Card>
          <Card name={"Battle Ram"} bgColor={"bb7f13"}></Card>
          <Card name={"Goblin Barrel"} bgColor={"bb7f13"}></Card> */}
          {cards[0].map((c) => (
            <Card
              name={c.name}
              description={c.description}
              rarity={c.rarity}
            ></Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

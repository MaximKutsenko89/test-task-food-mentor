import React from "react";
import clsx from "clsx";
import cross from "./images/cross.svg";
import donut from "./images/donut.svg";
import moon from "./images/moon.svg";
import pizza from "./images/pizza.svg";
import salt from "./images/salt.svg";
import soda from "./images/soda.svg";
import "./behaviorsScreen.scss";

const data = [
  { title: "I don't rest enough", image: moon, id: 0 },
  { title: "I have a sweet tooth", image: donut, id: 1 },
  { title: "I have too much soda", image: soda, id: 2 },
  { title: "I eat many salty foods", image: salt, id: 3 },
  { title: "I enjoy midnight snacks", image: pizza, id: 4 },
  { title: "None of the above", image: cross, id: 5 },
];

function BehaviorsScreen({
  onClick,
  activeBtn,
}: {
  onClick: (value: string) => void;
  activeBtn: string;
}) {
  return (
    <>
      <h1 className="main-title">Destructive behaviors</h1>
      <p className="text">We all have them! Which are yours?</p>
      <div className="behaviors-screen__wrap">
        {data.map((item) => {
          return (
            <div
              className={clsx("behaviors-screen__item", {
                ["active"]: item.title === activeBtn,
              })}
              key={item.id}
              onClick={() => onClick(item.title)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="behaviors-screen__img"
              />
              <div className="behaviors-screen__title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default BehaviorsScreen;

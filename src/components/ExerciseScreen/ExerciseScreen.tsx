import girl from "./images/girl.png";
import "./exerciseScreen.scss";
import clsx from "clsx";
const data = [
  { title: "Hardly at all", id: 0 },
  { title: "Fitness 1-2  times a week", id: 1 },
  { title: "Fitness 3-5 times a week", id: 2 },
  { title: "Fitness 5-7 times a week", id: 3 },
];
function ExerciseScreen({
  onClick,
  activeBtn,
}: {
  onClick: (value: string) => void;
  activeBtn: string;
}) {
  return (
    <>
      <h1 className="main-title">Physical exercise</h1>
      <p className="text">
        Physical exercise means a lot for a woman who wants to lose kilos and
        works at the office
      </p>
      <h3 className="subtitle">How active are you during the day?</h3>
      <div className="exercise-screen__inner">
        <div className="exercise-screen__img-wrap">
          <img src={girl} alt={"girl"} />
        </div>
        <div className="exercise-screen__button-wrap">
          {data.map((item) => {
            return (
              <div
                className={clsx("exercise-screen__button", {
                  ["active"]: item.title === activeBtn,
                })}
                key={item.id}
                onClick={() => onClick(item.title)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ExerciseScreen;

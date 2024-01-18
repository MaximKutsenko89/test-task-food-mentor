import goalImg1 from "./images/goal1.png";
import goalImg2 from "./images/goal2.png";
import goalImg3 from "./images/goal3.png";
import goalImg4 from "./images/goal4.png";
import "./goalScreen.scss";

const data = [
  { title: "Lose Weight", image: goalImg1, id: 1 },
  { title: "Gain Muscle", image: goalImg2, id: 2 },
  { title: "Develop healthy habits", image: goalImg3, id: 3 },
  { title: "Develop healthy habits", image: goalImg4, id: 4 },
];

function GoalScreen({ onClick }: { onClick: (value: string) => void }) {
  return (
    <>
      <h1 className="main-title">The Goal</h1>
      <div className="text">
        Focus on the health benefits you need. Balanced nutrition will let you
        achieve them
      </div>
      <h3 className="subtitle">What are your goals?</h3>
      <div className="goal__inner">
        {data.map((item) => {
          return (
            <div
              className="goal__item"
              key={item.id}
              role="button"
              onClick={() => onClick(item.title)}
            >
              <div className="goal__title">{item.title}</div>
              <img src={item.image} alt={item.title} className="goal__img" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GoalScreen;

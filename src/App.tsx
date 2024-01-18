import React, { useState } from "react";
import GoalScreen from "./components/GoalScreen/GoalScreen";
import Header from "./components/Header/Header";
import UnitScreen from "./components/UnitScreen/UnitScreen";
import BehaviorsScreen from "./components/BehaviorsScreen/BehaviorsScreen";
import ExerciseScreen from "./components/ExerciseScreen/ExerciseScreen";

type Data = {
  [key: number]: React.ReactElement;
};
type Answers = {
  goal: string;
  units: {
    currentHeight: number | null;
    currentWeight: number | null;
  };
  behaviors: string;
  exercises: string;
};
function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    goal: "",
    units: {
      currentHeight: null,
      currentWeight: null,
    },
    behaviors: "",
    exercises: "",
  });
  const answersArray = Object.values(answers);
  const falsyValues = [0, null, undefined, ""];

  const isButtonDisabled =
    answersArray[activeStep] === "" ||
    falsyValues.includes(answers.units.currentHeight) ||
    falsyValues.includes(answers.units.currentWeight) ||
    (answers.units.currentHeight as number) < 150 ||
    (answers.units.currentWeight as number) < 40;

  function increment() {
    setActiveStep((prev) =>
      prev >= Object.entries(data).length - 1 ? prev : prev + 1
    );
  }
  function decrement() {
    setActiveStep((prev) => (prev <= 0 ? prev : prev - 1));
  }
  const data: Data = {
    0: (
      <GoalScreen
        onClick={(value: string) => {
          setAnswers((prev) => ({ ...prev, goal: value }));
          increment();
        }}
      />
    ),
    1: (
      <UnitScreen
        currentHeight={answers.units.currentHeight as number}
        currentWeight={answers.units.currentWeight as number}
        onHeightChange={(value) =>
          setAnswers((prev) => ({
            ...prev,
            units: { ...prev.units, currentHeight: value },
          }))
        }
        onWeightChange={(value) =>
          setAnswers((prev) => ({
            ...prev,
            units: { ...prev.units, currentWeight: value },
          }))
        }
      />
    ),
    2: (
      <BehaviorsScreen
        onClick={(value: string) =>
          setAnswers((prev) => ({
            ...prev,
            behaviors: value,
          }))
        }
        activeBtn={answers.behaviors}
      />
    ),
    3: (
      <ExerciseScreen
        onClick={(value: string) => {
          setAnswers((prev) => ({
            ...prev,
            exercises: value,
          }));
          setTimeout(() => {
            alert("Quiz completed");
          }, 1000);
        }}
        activeBtn={answers.exercises}
      />
    ),
  };

  return (
    <>
      <Header onClick={decrement} />
      <div className="container">
        {data[activeStep]}
        {activeStep > 0 && activeStep !== answersArray.length - 1 && (
          <button
            className="btn"
            disabled={isButtonDisabled}
            onClick={increment}
          >
            Continue
          </button>
        )}
      </div>
    </>
  );
}

export default App;

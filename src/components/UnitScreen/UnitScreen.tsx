import { useState } from "react";
import clsx from "clsx";
import "./unitScreen.scss";

enum UNITS {
  IMPERIAL = "imperial",
  METRIC = "metric",
}

type UnitScreenProps = {
  onHeightChange: (value: number) => void;
  onWeightChange: (value: number) => void;
  currentHeight: number;
  currentWeight: number;
};

function UnitScreen(props: UnitScreenProps) {
  const { currentHeight, currentWeight, onHeightChange, onWeightChange } =
    props;
  const [units, setUnits] = useState<UNITS>(UNITS.IMPERIAL);

  const handleHeightChange = (value: string) => {
    if (units === UNITS.IMPERIAL) {
      const heightInCm = +(value || 0) * 30.48;
      onHeightChange(+heightInCm);
    } else {
      onHeightChange(+value);
    }
  };

  const handleWeightChange = (value: string) => {
    if (units === UNITS.IMPERIAL) {
      const weightInKg = +value / 2.205;
      onWeightChange(+weightInKg);
    } else {
      onWeightChange(+value);
    }
  };

  return (
    <>
      <h1 className="main-title">Measure Yourself</h1>
      <p className="text">What are your height and body weight?</p>
      <div className="unit__wrapper">
        <div className="unit__btn-wrap">
          <button
            className={clsx("unit__btn", {
              ["active"]: units === UNITS.IMPERIAL,
            })}
            onClick={() => setUnits(UNITS.IMPERIAL)}
          >
            Imperial
          </button>
          <button
            className={clsx("unit__btn", {
              ["active"]: units === UNITS.METRIC,
            })}
            onClick={() => setUnits(UNITS.METRIC)}
          >
            Metric
          </button>
        </div>
        <div className="unit__input-wrap">
          {units === UNITS.IMPERIAL ? (
            <>
              <input
                type="text"
                name={UNITS.IMPERIAL + "-height"}
                className="unit__input"
                placeholder="Height(ft)"
                onChange={(e) => handleHeightChange(e.target.value)}
                value={+(currentHeight / 30.48).toFixed(2) || ""}
              />
              <input
                type="text"
                name={UNITS.IMPERIAL + "-weight"}
                className="unit__input"
                placeholder="Current Weight(lbs)"
                onChange={(e) => handleWeightChange(e.target.value)}
                value={+(currentWeight * 2.205).toFixed(2) || ""}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                name={UNITS.METRIC + "-height"}
                className="unit__input"
                placeholder="Height(cm)"
                onChange={(e) => handleHeightChange(e.target.value)}
                value={+currentHeight?.toFixed(2) || ""}
              />
              <input
                type="text"
                name={UNITS.METRIC + "-weight"}
                className="unit__input"
                placeholder="Current Weight(kg)"
                onChange={(e) => handleWeightChange(e.target.value)}
                value={+currentWeight?.toFixed(2) || ""}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UnitScreen;

import React from "react";
import Button from "../components/Button";
import { getStep, getSteps } from "../Steps";

export default function StepBar(props) {
  const step = getStep(props.store.step);

  const previousButtonDisabled = props.store.step < 1;
  const continueButtonDisabled = props.store.step >= getSteps().length - 1;

  return (
    <div className="flex justify-between bg-purple-400 p-2 rounded-md shadow-md">
      <div className="flex items-center pl-2">
        <h1 className="text-white text-lg font-semibold mr-2">Step {props.store.step + 1}</h1>
        <h1 className="text-white text-lg font-medium">{step.hint}</h1>
      </div>
      <div className="flex">
        <button disabled={+previousButtonDisabled} className={previousButtonDisabled ? "cursor-not-allowed" : ""} onClick={() => props.store.onDecrement()}>
          <div className="mr-2">
            <Button text="Previous" disabled={+previousButtonDisabled} />
          </div>
        </button>
        <button disabled={+continueButtonDisabled} className={continueButtonDisabled ? "cursor-not-allowed" : ""} onClick={() => props.store.onIncrement()}>
          <Button text="Continue" disabled={+continueButtonDisabled}  />
        </button>
      </div>
    </div>
  );
}
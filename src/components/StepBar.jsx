import React from "react";
import Button from "../components/Button";
import { getStep, getSteps } from "../Steps";

export default function StepBar(props) {
  const { stepId } = props.store.getState();
  const step = getStep(stepId);

  const previousButtonDisabled = stepId < 1;
  const continueButtonDisabled = (step.isDisabled && step.isDisabled(props.store)) ? true : stepId >= getSteps().length - 1;

  return (
    <div className="flex flex-col sm:flex-row justify-between bg-purple-400 p-2 rounded-md shadow-md">
      <div className="flex flex-col sm:flex-row items-center pl-2">
        <h1 className="text-white text-lg font-semibold mr-2">Step {stepId + 1}</h1>
        <h1 className="text-white text-lg font-medium">{step.hint}</h1>
      </div>
      <div className="flex mt-2 sm:mt-0 justify-center sm:justify-start">
        <button disabled={+previousButtonDisabled} className={previousButtonDisabled ? "cursor-not-allowed" : ""} onClick={() => props.store.dispatch({ type: "PREVIOUS_STEP" })}>
          <div className="mr-2">
            <Button text="Previous" disabled={+previousButtonDisabled} />
          </div>
        </button>
        <button disabled={+continueButtonDisabled} className={continueButtonDisabled ? "cursor-not-allowed" : ""} onClick={() => props.store.dispatch({ type: "NEXT_STEP" })}>
          <Button text="Continue" disabled={+continueButtonDisabled}  />
        </button>
      </div>
    </div>
  );
}
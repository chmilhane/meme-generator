import Templates from "./views/Templates";
import Boxes from "./views/Boxes";

class Step {
  constructor(view, hint, isDisabled) {
    this.view = view
    this.hint = hint;
    this.isDisabled = isDisabled;
  }
}

const steps = [
  new Step(Templates, "Please select a template", store => {
    return !store.getState().meme;
  }),
  new Step(Boxes, "Please fill in the fields")
];

export function getStep(id) {
  return steps[id] || steps[0];
}

export function getSteps() {
  return steps;
}
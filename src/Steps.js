import Templates from "./views/Templates";
import Test from "./views/Test";

class Step {
  constructor(view, hint) {
    this.view = view
    this.hint = hint;
  }
}

const steps = [
  new Step(Templates, "1st step"),
  new Step(Test, "Another step"),
];

export function getStep(id) {
  return steps[id] || steps[0];
}

export function getSteps() {
  return steps;
}
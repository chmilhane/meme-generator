import React from 'react';
import Navbar from './components/Navbar';
import StepBar from './components/StepBar';
import { getStep } from "./Steps";

function App(props) {
  const stepId = props.store.getState().stepId;
  const { view: View } = getStep(stepId);

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center p-8">
        <div className="mb-4">
          <StepBar store={props.store} />
        </div>
        <View store={props.store} />
        {stepId === 0 && <div className="mt-4">
          <StepBar store={props.store} />
        </div>}
      </div>
    </div>
  );
}

export default App;
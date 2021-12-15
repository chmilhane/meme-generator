import React from 'react';
import Navbar from './components/Navbar';
import StepBar from './components/StepBar';
import { getStep } from "./Steps";

function App(props) {
  const { view: View } = getStep(props.step);

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col justify-center p-8">
        <div className="mb-4">
          <StepBar store={props} />
        </div>
        <View />
        <div className="mt-4">
          <StepBar store={props} />
        </div>
      </div>
    </div>
  );
}

export default App;
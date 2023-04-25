import React, { useState, useEffect, useRef } from "react";

const Stepper = ({ steps, currentStep }) => {
  // This is the new steps array that we will use to update the steps
    const [newStep, setNewStep] = useState([]);

    // This is the reference to the steps array, that means that if we update the steps array, the reference will also be updated
    // Similar to using states, but the difference is that useRef will not trigger a re-render when its value changes
    const stepsRef = useRef();
    
    const updateStep = (stepNumber, steps) => {
      const newSteps = [...steps];
      // console.log(newSteps);
      let count = 0;
      while (count < newSteps.length) {
        //current step
        if (count === stepNumber) {
          newSteps[count] = {
             // ...spread operator is used to copy the properties of an object to another object so that we don't mutate the original object
            ...newSteps[count],
            highlighted: true,
            selected: true,
            completed: false,
          };
          count++;
        }
        //step completed
        else if (count < stepNumber) {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: true,
            completed: true,
          };
          count++;
        }
        //step pending
        else {
          newSteps[count] = {
            ...newSteps[count],
            highlighted: false,
            selected: false,
            completed: false,
          };
          count++;
        }
      }

      return newSteps;
  };

  useEffect(() => {
    // This is the steps array that we will use to update the steps
      const stepsState = steps.map((step, index) =>
      // Here we are creating a new object with the properties of the step object and adding the new properties
      // Object.assign is used to copy the properties of an object to another object so that we don't mutate the original object
      Object.assign(
          {},
          {
          name: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
          }
        )
      );
      
      // We update the stepsRef.current with the new stepsState array
      stepsRef.current = stepsState;

      // current is the array from the updateStep function
      const current = updateStep(currentStep - 1, stepsRef.current);
      
      // We update the newStep state with the current array
      setNewStep(current);
  }, [steps, currentStep]);

  return (
    <div className="mx-4 p-4 pt-8 flex justify-between items-center">
      {/* Map through the newStep array */}
      {newStep.map((step, index) => {
        return (
            <div
                key={index}
                className={
                index !== newStep.length - 1
                    ? "w-full flex items-center"
                    : "flex items-center"
                }
            >
            <div className="relative flex flex-col items-center text-teal-600">
                {/* Step Number */}
            <div
                className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center py-3 text-md ${
                step.selected
                    ? "bg-green-600 text-white font-bold border border-green-600 "
                    : ""
                }`}
            >
                {/* Step checkmark when completed */}
                {step.completed ? (
                <span className="text-white font-bold text-xl">&#10003;</span>
                ) : (
                index + 1
                )}
            </div>
            {/* Step name */}
            <div
                className={`absolute top-0 pr-12 text-center mt-16 w-1/2 text-[.65rem]  font-medium uppercase sm:text-[.8rem] ${
                step.highlighted ? "text-green-500" : "text-gray-400"
                }`}
            >
                {step.name}
            </div>
            </div>
            {/* Progress Line */}
            <div
            className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
                step.completed ? "border-green-600" : "border-gray-300 "
            }  `}
            ></div>
        </div>
        );
    })}
    </div>
  );
};
export default Stepper;
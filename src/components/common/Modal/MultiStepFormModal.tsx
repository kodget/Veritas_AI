
import Icons from "../icons/Icons.tsx";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { nextStep, previousStep, resetStep } from "../../features/Modal/formSlice.ts";
import { setIsOpen } from "../../features/Modal/toggleModalSlice";
import { useEffect } from 'react';
import FormStepOne from "./FormStepOne.tsx";
import FormStepTwo from "./FormStepTwo.tsx";
import FormStepThree from "./FormStepThree.tsx";

const MultiStepFormModal = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.form.step);
  
  useEffect(() => {
    dispatch(resetStep());
  }, [dispatch]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-4/5 max-w-4xl h-4/5 bg-slate-800 text-center shadow-2xl rounded-2xl border border-slate-700 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-white text-3xl font-semibold">
              Create New Claim
            </h2>
            <div className="flex items-center gap-2 mt-2">
              {[1, 2, 3].map((stepNum) => (
                <div key={stepNum} className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= stepNum ? 'bg-emerald-600 text-white' : 'bg-slate-600 text-slate-400'
                }`}>
                  {stepNum}
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => dispatch(setIsOpen(false))}>
            <Icons className="text-gray-600 text-2xl " name="xmark" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          <div>{step === 1 && <FormStepOne />}</div>
          <div>{step === 2 && <FormStepTwo />}</div>
          <div>{step === 3 && <FormStepThree />}</div>
        </div>
        <div className="flex justify-between items-center p-4">
          {step > 1 && step < 3 && (
            <button
              onClick={() => dispatch(previousStep())}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              <i className="fa-solid fa-arrow-left mr-2"></i>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={() => dispatch(nextStep())}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors ml-auto"
            >
              {step === 2 ? 'Submit Claim' : 'Next'}
              <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          ) : (
            <button
              onClick={() => dispatch(setIsOpen(false))}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors ml-auto"
            >
              <i className="fa-solid fa-check mr-2"></i>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepFormModal;

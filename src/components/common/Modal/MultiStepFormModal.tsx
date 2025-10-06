import Button from "../Button.tsx";
import Icons from "../icons/Icons.tsx";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { nextStep, previousStep } from "../../features/Modal/formSlice.ts";
import { setIsOpen } from "../../features/Modal/toggleModalSlice";
import FormStepOne from "./FormStepTwo.tsx";
import FormStepThree from "./FormStepOne.tsx";
import FormStepTwo from "./FormStepThree.tsx";

const MultiStepFormModal = () => {
  const dispatch = useAppDispatch();
  const step = useAppSelector((state) => state.form.step);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className=" w-2/3 h-2/3 bg-[#0a192f] text-center shadow-2xl rounded-2xl p-6  backdrop-blur-sm">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-white text-3xl font-semibold">
            Create New Claim
          </h2>
          <button onClick={() => dispatch(setIsOpen(false))}>
            <Icons className="text-gray-600 text-2xl " name="xmark" />
          </button>
        </div>
        <div>
          <div>{step === 1 && <FormStepOne />}</div>
          <div>{step === 2 && <FormStepTwo />}</div>
          <div>{step === 3 && <FormStepThree />}</div>
        </div>
        <div className="flex justify-between items-center p-4">
          <Button
            bgColor="bg-blue-800"
            hoverColor="hover:bg-blue-900"
            color="text-yellow-400"
            title="Previous"
            onClick={() => dispatch(previousStep())}
          />
          <Button
            bgColor="bg-green-500"
            hoverColor="hover:bg-green-800"
            color="text-white"
            title="Next"
            onClick={() => dispatch(nextStep())}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepFormModal;

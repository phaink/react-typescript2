import type { TInputFormProps } from "../../types/types";
import Button from "../button/Button";
import { MAX_VALUE, MIN_VALUE } from "../constants/constants";

export default function InputForm({
  label,
  inputValue,
  setInputValue,
  handleSubmit,
}: TInputFormProps) {
  return (
    <form
      className="flex gap-0 my-2 mx-auto w-full justify-center items-center font-base"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="start-value"
        className="bg-emerald-500 font-base rounded-l-md px-2 text-1xl text-center text-white capitalize h-10 w-fit flex items-center"
      >
       {label}
      </label>
      <input
        id="start-value"
        name="start-value"
        min={MIN_VALUE}
        max={MAX_VALUE}
        type="number"
        value={inputValue}
        className="bg-slate-700 px-2 w-1/3 font-base h-10 text-center"
        onChange={(e) =>  setInputValue(parseInt(e.target.value))}
      />
      <Button
        styles="bg-emerald-500 rounded-r-md h-10 w-fit font-base"
        symbol={"Set"}
      />
    </form>
  );
}

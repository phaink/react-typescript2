import type { TCount, TCountButtonProps } from "../../types/types";
import Button from "../button/Button";
import { MAX_VALUE, MIN_VALUE } from "../constants/constants";
import Display from "../display/display";

export default function CountButton({ count, setCount }: TCountButtonProps) {
  const handleCountUp = () => {
    console.log("handleCountUp");
    console.dir(count);

    setCount((currCount: TCount) => ({
      ...currCount,
      value:
        currCount.value < MAX_VALUE
          ? currCount.value + currCount.step
          : MAX_VALUE,
    }));
  };
  const handleCountDown = () => {
    console.log("handleCountDown");
    console.dir(count);

    setCount((currCount: TCount) => ({
      ...currCount,
      value:
        currCount.value > MIN_VALUE
          ? currCount.value - currCount.step
          : MIN_VALUE,
    }));
  };
  const handleCountReset = () => {
    setCount({ value: 0, step: 1 });
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <div className="grid grid-cols-3 justify-center items-center w-full">
        <Button
          styles="bg-emerald-600 rounded-l-lg"
          symbol="+"
          handleClick={handleCountUp}
        />
        <Display styles="bg-sky-600" count={count} />
        <Button
          styles="bg-orange-600 rounded-r-lg"
          symbol="-"
          handleClick={handleCountDown}
        />
      </div>
      <Button
        styles="bg-yellow-600 rounded-md"
        symbol="reset"
        handleClick={handleCountReset}
      />
    </div>
  );
}

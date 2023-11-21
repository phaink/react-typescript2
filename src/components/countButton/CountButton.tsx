import type { TCountButtonProps } from "../../types/types";
import Button from "../button/Button";

export default function CountButton({ count, setCount }: TCountButtonProps) {
  const handleCountUp = () => {
    setCount((count) => ( count < 999 ? count + 1 : 999));
  };
  const handleCountDown = () => {
    setCount((count) => ( count > 0 ? count - 1 : 0));
  };
  const handleCountReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-full">
      <div className="grid grid-cols-3 justify-center items-center w-full">
        <Button
          styles="bg-emerald-600 rounded-l-lg"
          symbol="+"
          handleClick={handleCountUp}
        />
        <Button styles="bg-sky-600" symbol={count} />
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

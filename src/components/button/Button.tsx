import type { TButtonProps } from "../../types/types";

export default function Button({ handleClick, symbol, styles }: TButtonProps) {
  return (
    <button
      className={`${styles} px-4 py-1  capitalize  text-2xl`}
      onClick={handleClick}
    >
      {symbol}
    </button>
  );
}

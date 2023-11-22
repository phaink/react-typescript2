import type { TDisplayProps } from "../../types/types";

export default function Display({ count, styles }: TDisplayProps) {
  const baseStyles = ` ${styles} block px-4 py-1 text-2xl text-center w-full `;
  const styles1 = (count.step !== 1 ? "rounded-t-lg" : " ") + baseStyles;
  const styles2 =
    baseStyles + "text-yellow-500 rounded-b-lg text-sm";
  return (
    <div className="flex flex-col justify-center items-center">
      <span className={styles1}>{count.value}</span>
      {count.step !== 1 && <span className={styles2}>+{count.step}</span>}
    </div>
  );
}

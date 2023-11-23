export type TCount = {
  value: number;
  step: number;
};
export type TCountButtonProps = {
  count: TCount;
  setCount: React.Dispatch<React.SetStateAction<TCountr>>;
};
export type TButtonProps = {
  handleClick?: () => void;
  symbol: string | number;
  styles?: string;
};

export type TDisplayProps = Omit<TButtonProps, "symbol"> & {
  count: TCount;
};
export type TInputFormProps = {
  label: string;
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type THeaderFooteProps = {
  siteTitle: string;
};

export type TCountButtonProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};
export type TButtonProps = {
  handleClick?: () => void;
  symbol: string | number;
  styles?: string;
};
export type TInputFormProps = {
  label: string;
  inputValue: number;
  setInputValue: React.Dispatch<React.SetStateAction<number>>;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
};

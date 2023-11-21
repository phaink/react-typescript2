import { useState } from "react";
import CountButton from "./components/countButton/CountButton";
import InputForm from "./components/inputForm/inputForm";


function App() {
  const [startValue, setStartValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [count, setCount] = useState(startValue);
  const handleSetStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount(startValue);
  };

  const handleSetStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount(startValue);
  };

  return (
    <div className="bg-slate-900 text-slate-50 min-w-screen min-h-screen flex items-center justify-center subpixel-antialiased ">
      <div className="w-2/3 h-48 min-h-screen rounded-lg p-6 md:w-1/3 lg:w-1/4">
        <h1 className="text-3xl text-center text-emerald-300">
          React & Typescipt
        </h1>
        <h2 className="text-2xl text-center text-red-400">On CodeSandbox!</h2>
        <InputForm
          label="initial value"
          inputValue={startValue}
          setInputValue={setStartValue}
          handleSubmit={handleSetStart}
        />
        <InputForm
          label="step value"
          inputValue={stepValue}
          setInputValue={setStepValue}
          handleSubmit={handleSetStep}
        />
        <CountButton count={count} setCount={setCount} />
      </div>
    </div>
  );
}

export default App;

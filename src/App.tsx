import { useState } from "react";
import { siteTitle } from "./components/constants/constants";
import CountButton from "./components/countButton/CountButton";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import InputForm from "./components/inputForm/inputForm";
import type { TCount } from "./types/types";

function App() {
  const [startValue, setStartValue] = useState(0);
  const [stepValue, setStepValue] = useState(1);
  const [count, setCount] = useState<TCount>({
    value: startValue,
    step: stepValue,
  });
  const handleSetStart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((currCount) => {
      console.log("handleSetStart");

      return { ...currCount, value: startValue };
    });
    console.dir(count);
  };

  const handleSetStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((currCount) => ({ ...currCount, step: stepValue }));
  };

  document.title = siteTitle;

  return (
    <>
      <Header siteTitle={siteTitle} />
      <div className="bg-slate-900 text-slate-50 min-w-screen min-h-screen flex items-center justify-center subpixel-antialiased ">
        <div className="w-2/3 h-48 min-h-screen rounded-lg p-6 md:w-1/3 lg:w-1/4">
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
      <Footer siteTitle={siteTitle} />
    </>
  );
}

export default App;

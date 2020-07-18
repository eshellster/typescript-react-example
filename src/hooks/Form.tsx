import React, { useState } from "react";

const useInputValue = (initialValue: string) => {
  const [value, setvalue] = useState(initialValue);
  return {
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setvalue(e.target.value),
  };
};

export const Form: React.FC = () => {
  const text = useInputValue("");
  const email = useInputValue("");
  const name = useInputValue("");
  const nickName = useInputValue("");
  return (
    <>
      <input {...text} />
      <input {...email} />
      <input {...name} />
      <input {...nickName} />
    </>
  );
};

export default Form;

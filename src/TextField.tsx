import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Prop {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TextNode {
  text: string;
}

export const TextField: React.FC<Prop> = ({ handleChange, person, text }) => {
  const [count, setCount] = useState<number>(5);
  const [txt, setTxt] = useState<TextNode>({ text });

  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <input
        ref={inputRef}
        onChange={handleChange}
        placeholder={txt.text + count}
      />
    </div>
  );
};

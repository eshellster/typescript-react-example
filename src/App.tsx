import React from "react";
import { TextField } from "./TextField";
import { ReducerExample } from "./ReducerExample";

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "e", lastName: "shell" }}
        handleChange={(event) => {}}
      />
      <ReducerExample />
    </div>
  );
};

export default App;

import React, { useState } from "react";

export default function App(): JSX.Element {
  const [state, setState] = useState({ text: "Hello World!" });
  return (
    <div>
      <h1>{state.text}</h1>
    </div>
  );
}

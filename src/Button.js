import { useState } from "react";
const [NumberTwo, setInputTwo] = useState("0");
function Button() {
  for (let i = 0; i < 10; i++) {
    return (setInputTwo = i);
  }
  return <button onClick={() => setInputTwo("i")}>i</button>;
}

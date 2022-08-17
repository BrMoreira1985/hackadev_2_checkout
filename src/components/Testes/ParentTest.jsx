import { useState } from "react";
import Child from "./TestButton";
import Display from "./Display";

export default function Parent() {
  const [count, setCount] = useState(0);

  function handleClick(num) {
    // 👇️ take parameter passed from Child component
    setCount((current) => num);
  }

  return (
    <div>
      <Child {...{ handleClick, thisName: "teste", value: 5 }} />
      <Child {...{ handleClick, thisName: "teste", value: 10 }} />
      <Child {...{ handleClick, thisName: "teste", value: 15 }} />
      <Child {...{ handleClick, thisName: "teste", value: 20 }} />
      <Display value={count} />
    </div>
  );
}

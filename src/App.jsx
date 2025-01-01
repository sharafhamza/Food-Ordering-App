import { useState } from "react";
import RestaurentCard from "./components/RestaurentCard";
import Body from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RestaurentCard />
      <Body />
    </>
  );
}

export default App;

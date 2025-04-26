import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from "./LayOut";
import Body from "./components/Body";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<Body />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

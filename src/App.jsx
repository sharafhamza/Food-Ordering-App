import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Body />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

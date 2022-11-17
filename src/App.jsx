import Home from "./pages/home/Home";
import Benefits from "./components/Benefits/Benefits";
import benefits from "./setup/data.config";
function App() {
  return (
    <>
      <Home />
      <Benefits benefits={benefits.proBenefits} />
    </>
  );
}

export default App;

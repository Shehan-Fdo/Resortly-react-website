import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;

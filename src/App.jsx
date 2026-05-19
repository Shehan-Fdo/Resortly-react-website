import "./App.css";

import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Home Section  */}
        <section id="home" className="home flex min-h-screen w-full flex-col">
          <Home />
        </section>
        {/* Rooms Section  */}
        <section
          id="rooms"
          className="rooms flex min-h-screen w-full items-center justify-center bg-white text-black"
        >
          <h1 className="text-5xl font-bold">Rooms</h1>
        </section>
        {/* Amenities Section  */}
        <section
          id="amenities"
          className="flex min-h-screen w-full items-center justify-center bg-white text-black"
        >
          <h1 className="text-5xl font-bold">Amenities</h1>
        </section>
        {/* Contact Section  */}
        <section
          id="contact"
          className="flex min-h-screen w-full items-center justify-center bg-white text-black"
        >
          <h1 className="text-5xl font-bold">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;

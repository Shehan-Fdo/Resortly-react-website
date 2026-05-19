import "./App.css";

import { Navbar } from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";

function App() {
  return (
    <>
      <Navbar />

      <main
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        {/* Home Section  */}
        <section
          id="home"
          className="home flex min-h-screen w-full flex-col snap-start"
        >
          <Home />
        </section>
        {/* Rooms Section  */}
        <section
          id="rooms"
          className="rooms flex min-h-screen w-full items-center justify-center bg-purple-400 text-black snap-start"
        >
          <h1 className="text-5xl font-bold">Rooms</h1>
        </section>
        {/* Amenities Section  */}
        <section
          id="amenities"
          className="flex min-h-screen w-full items-center justify-center bg-yellow-400 text-black snap-start"
        >
          <h1 className="text-5xl font-bold">Amenities</h1>
        </section>
        {/* Contact Section  */}
        <section
          id="contact"
          className="flex min-h-screen w-full items-center justify-center bg-red-400 text-black snap-start"
        >
          <h1 className="text-5xl font-bold">Contact</h1>
        </section>
      </main>
    </>
  );
}

export default App;

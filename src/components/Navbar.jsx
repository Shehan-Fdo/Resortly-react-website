export const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex flex-row justify-between px-20 mt-4 items-center z-50">
      <div className="font-black text-2xl">Resorty</div>
      <div className="p-2">
        <nav className="flex flex-row  items-center rounded-4xl bg-white/50 backdrop-blur-[3px] shadow-lg ring-1 ring-black/2">
          <a
            className="p-3 px-5 rounded-4xl hover:bg-white hover:backdrop-blur-[1px] hover:ring-4 hover:ring-white transition ease-in-out"
            href="#"
          >
            Home
          </a>
          <a
            className="p-3 px-5 rounded-4xl hover:bg-white hover:backdrop-blur-[1px] hover:ring-4 hover:ring-white transition ease-in-out"
            href="#"
          >
            Rooms
          </a>
          <a
            className="p-3 px-5 rounded-4xl hover:bg-white hover:backdrop-blur-[1px] hover:ring-4 hover:ring-white transition ease-in-out"
            href="#"
          >
            Amenities
          </a>
          <a
            className="p-3 px-5 rounded-4xl hover:bg-white hover:backdrop-blur-[1px] hover:ring-4 hover:ring-white transition ease-in-out"
            href="#"
          >
            Contact
          </a>
        </nav>
      </div>
      <div className="text-white p-3 px-6 rounded-4xl bg-white/0 backdrop-blur-[3px] shadow-3xl ring-1 ring-white/5">
        Sign in
      </div>
      {/* <div className="text-white p-3 px-6 rounded-4xl bg-white/0 backdrop-blur-[3px] shadow-3xl ring-1 ring-white/5">
        Sign in
      </div> */}
    </div>
  );
};

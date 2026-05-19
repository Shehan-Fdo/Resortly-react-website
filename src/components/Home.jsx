import HeroForm from "./HeroForm";

export const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat lg:flex lg:items-center"
      style={{
        backgroundImage: `
          linear-gradient(to top, rgb(0,0,0), rgba(255,255,255,0.116), rgba(255,255,255,0), rgba(0,0,0,0)),
          url("/bg2.png")
        `,
      }}
    >
      <div className="w-full mt-24 lg:mt-0 px-4 lg:px-40 flex flex-col items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:place-items-center">
        <div className="px-2 w-full">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl text-center lg:text-right text-white"
            style={{ fontFamily: "Imbue" }}
          >
            Stay where calm meets nature
          </h1>
          <p className="text-center lg:text-right text-white mt-2 mb-3">
            Browse premium rooms and book instantly
          </p>
          <div className="flex justify-center lg:justify-end">
            <a
              href="#rooms"
              className="rounded-2xl bg-white px-6 py-3 hover:bg-black hover:text-white transition ease-in-out duration-300"
            >
              Browse Rooms
            </a>
          </div>
        </div>
        <div className="w-full max-w-lg">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

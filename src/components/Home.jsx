import HeroForm from "./HeroForm";

export const Home = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(to top, rgb(0,0,0), rgba(255,255,255,0.116), rgba(255,255,255,0), rgba(0,0,0,0)),
          url("/bg2.png")
        `,
      }}
    >
      <div className="mt-25 px-4 flex flex-col items-center lg:grid lg:grid-cols-2 lg:items-center">
        <h1
          className="text-7xl mb-3 px-1 text-amber-400"
          style={{ fontFamily: "Imbue" }}
        >
          Stay where calm meets nature
        </h1>
        <div className="w-full max-w-lg">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";

export default function HeroForm() {
  const [guests, setGuests] = useState(1);

  return (
    <div className="w-full rounded-[20px] bg-yellow/7 p-6 sm:p-8 text-white ring-1 ring-white/10 backdrop-blur-2xl">
      <h2 className="mb-7 text-2xl font-medium">Book your stay</h2>

      <form className="space-y-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] tracking-wide text-white/55">
            Your name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-xl border border-white/12 bg-white/8 px-3.5 py-2.75 text-sm text-white outline-none transition focus:border-white/35"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] tracking-wide text-white/55">
              Start date
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-white/12 bg-white/8 px-3.5 py-2.75 text-sm text-white/80 outline-none transition scheme-dark focus:border-white/35"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] tracking-wide text-white/55">
              End date
            </label>
            <input
              type="date"
              className="w-full rounded-xl border border-white/12 bg-white/8 px-3.5 py-2.75 text-sm text-white/80 outline-none transition scheme-dark focus:border-white/35"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] tracking-wide text-white/55">
              Guests
            </label>
            <div className="flex items-center justify-between rounded-xl border border-white/12 bg-white/8 px-3.5 py-2.75 transition focus-within:border-white/35">
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="text-white/60 hover:text-white text-lg leading-none transition select-none"
              >
                −
              </button>
              <span className="text-sm text-white/80">
                {guests} {guests === 1 ? "guest" : "guests"}
              </span>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.min(20, g + 1))}
                className="text-white/60 hover:text-white text-lg leading-none transition select-none"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-1 w-full rounded-xl bg-white py-3.25 text-sm font-medium tracking-wide text-black transition hover:opacity-90"
        >
          Check availability
        </button>
      </form>
    </div>
  );
}

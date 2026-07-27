"use client";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-950 to-purple-900"></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center">

        <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300">
          🚀 morden Digital Agency
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
          We Build
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {" "}Amazing morden designs Agency
          </span>
          <br />
          Experiences
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          We create modern designs Agency, UI/UX designs, branding and digital
          products that help businesses grow and stand out.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-cyan-600">
            Get Started
          </button>

          <button className="rounded-xl border border-slate-600 px-8 py-4 font-semibold text-white transition hover:border-cyan-400 hover:bg-slate-900">
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-3xl font-bold text-cyan-400">150+</h3>
            <p className="text-slate-400">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">80+</h3>
            <p className="text-slate-400">Clients</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-cyan-400">5★</h3>
            <p className="text-slate-400">Rating</p>
          </div>
        </div>

      </div>
    </section>
  );
}



    
  
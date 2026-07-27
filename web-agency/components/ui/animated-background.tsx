export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>

      <div className="absolute w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      <div className="absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-bounce top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
}

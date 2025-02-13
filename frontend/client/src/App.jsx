export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <header className="text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">🚀 Welcome to ASAP</h1>
        <p className="mt-4 text-lg opacity-90">
          Bringing your ideas to life at lightning speed.
        </p>
      </header>

      <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-indigo-100 transition">
        Get Started
      </button>

      <div className="mt-10 w-full max-w-4xl bg-white bg-opacity-10 p-6 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold">Why Choose ASAP?</h2>
        <ul className="mt-3 space-y-2">
          <li>✅ Rapid Prototyping</li>
          <li>✅ Scalable Solutions</li>
          <li>✅ Seamless Integration</li>
        </ul>
      </div>
    </div>
  );
}
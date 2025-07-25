import React from "react";

function App() {
  return (
    <div className="bg-[#0e0e0e] min-h-screen text-white font-sans">
      <header className="p-4 bg-[#1a1a1a] shadow-md">
        <h1 className="text-2xl font-bold text-yellow-400">GoldCrates</h1>
      </header>

      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">🔥 New Packs</h2>
        <div className="overflow-x-auto">
          <div className="flex space-x-4 pb-4">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 bg-[#1a1a1a] p-4 rounded-2xl shadow-md hover:scale-105 transition"
              >
                <div className="h-32 bg-gray-800 rounded-xl mb-3"></div>
                <h3 className="text-lg font-semibold">Pack #{i + 1}</h3>
                <p className="text-sm text-gray-400">$4.99</p>
                <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-1 rounded-lg font-medium">
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

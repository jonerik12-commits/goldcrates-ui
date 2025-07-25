import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-yellow-400">GoldCrates</h1>
        <div className="space-x-6 text-sm">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#" className="hover:text-yellow-400">Forged</a>
          <a href="#" className="hover:text-yellow-400">Battles</a>
          <a href="#" className="hover:text-yellow-400">Inventory</a>
          <a href="#" className="hover:text-yellow-400">Support</a>
        </div>
      </nav>

      {/* Packs Section */}
      <section className="p-6">
        <h2 className="text-xl font-semibold mb-4">🔥 New Packs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Example Pack Card */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] p-4 rounded-2xl shadow-md hover:scale-105 transition">
              <div className="h-32 bg-gray-800 rounded-xl mb-3"></div>
              <h3 className="text-lg font-semibold">Pack #{i + 1}</h3>
              <p className="text-sm text-gray-400">$4.99</p>
              <button className="mt-2 w-full bg-yellow-500 hover:bg-yellow-400 text-black py-1 rounded-lg font-medium">Open</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;


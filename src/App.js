import React, { useState } from "react";

const items = [
  { name: "Gold Watch", color: "bg-yellow-400" },
  { name: "Diamond Ring", color: "bg-blue-400" },
  { name: "iPhone", color: "bg-gray-300" },
  { name: "Nothing", color: "bg-gray-700" },
  { name: "Luxury Bag", color: "bg-pink-400" },
  { name: "Crypto Coin", color: "bg-green-400" },
];

function App() {
  const [spinning, setSpinning] = useState(false);
  const [position, setPosition] = useState(0);

  const spinPack = () => {
    setSpinning(true);
    const randomPos = Math.floor(Math.random() * items.length);
    setPosition(randomPos);

    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  return (
    <div className="bg-[#0e0e0e] min-h-screen flex flex-col items-center justify-center text-white font-sans px-4">
      <h1 className="text-3xl font-bold mb-8 text-yellow-400">Open Your Pack</h1>

      <div className="relative w-full max-w-xl overflow-hidden border-4 border-yellow-500 rounded-xl">
        <div
          className="flex transition-transform duration-[3000ms] ease-out"
          style={{
            transform: `translateX(-${position * 100}%)`,
          }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`w-full h-48 flex items-center justify-center text-lg font-bold ${item.color}`}
              style={{ minWidth: "100%" }}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={spinPack}
        disabled={spinning}
        className={`mt-6 px-6 py-3 rounded-xl font-semibold ${
          spinning ? "bg-gray-500 cursor-not-allowed" : "bg-yellow-500 hover:bg-yellow-400 text-black"
        }`}
      >
        {spinning ? "Spinning..." : "Spin Pack"}
      </button>
    </div>
  );
}

export default App;


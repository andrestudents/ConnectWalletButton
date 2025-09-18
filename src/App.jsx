import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-blue-900 to-blue-700">
      <div className="p-6 rounded-2xl bg-white/10 shadow-lg backdrop-blur-md">
        <ConnectButton />
      </div>
    </div>
  );
}

export default App;
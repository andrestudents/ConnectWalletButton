import React from "react";
import ReactDOM from "react-dom/client";
import { WagmiConfig, createConfig, http } from "wagmi";
import { mainnet } from "wagmi/chains";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";

// setup query client
const queryClient = new QueryClient();

// bikin config wagmi
const config = createConfig({
  autoConnect: false,
  connectors: getDefaultWallets({
    appName: "My DApp",
    projectId: "wagmi-example", // 👈 ini nanti kita benerin
    chains: [mainnet],
  }).connectors,
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={[mainnet]}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </QueryClientProvider>
  </React.StrictMode>
);

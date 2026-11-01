import { createContext, useContext, useState } from "react";

const LogoSpotContext = createContext({
  ready: false,
  setSpot: () => {},
  releaseSpot: () => {},
});

export function LogoSpotProvider({ children }) {
  const [ready, setReady] = useState(false);
  const setSpot = () => setReady(true);
  const releaseSpot = () => setReady(false);
  return (
    <LogoSpotContext.Provider value={{ ready, setSpot, releaseSpot }}>
      {children}
    </LogoSpotContext.Provider>
  );
}

export const useLogoSpot = () => useContext(LogoSpotContext);

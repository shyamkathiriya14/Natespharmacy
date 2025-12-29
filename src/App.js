import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import SplashScreen from "./components/sections/SplashScreen/SplashScreen";

function App() {
  const [hideSplash, setHideSplash] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideSplash(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Home />
      {!hideSplash && <SplashScreen/>}
    </>
  );
}

export default App;

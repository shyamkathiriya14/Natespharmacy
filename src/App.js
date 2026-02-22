import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SplashScreen from "./components/sections/SplashScreen/SplashScreen";
import Careers from "./pages/Careers/Careers";

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
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
      {!hideSplash && <SplashScreen/>}
    </>
  );
}

export default App;

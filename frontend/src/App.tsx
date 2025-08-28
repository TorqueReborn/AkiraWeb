import Cookies from 'js-cookie'
import { useState } from "react";
import Splash from "./pages/Splash/Splash"
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const [showSplash, setShowSplash] = useState(!Cookies.get('splashSeen'))

  return (
    <div>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && <Navbar />}
      {!showSplash && <Home />}
    </div>
  )
}

export default App
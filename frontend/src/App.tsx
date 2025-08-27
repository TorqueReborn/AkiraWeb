import Cookies from 'js-cookie'
import { useState } from "react";
import Splash from "./pages/Splash/Splash"
import Home from './pages/Home/Home';

const App = () => {
  const [showSplash, setShowSplash] = useState(!Cookies.get('splashSeen'))

  return (
    <div>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && <Home />}
    </div>
  )
}

export default App
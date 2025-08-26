import Cookies from 'js-cookie'
import { useState } from "react";
import Splash from "./splash/Splash"
import Home from './pages/Home/Home';
import Login from './login/Login';

const App = () => {
  const [showSplash, setShowSplash] = useState(!Cookies.get('splashSeen'))

  return (
    <div>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {!showSplash && <Home />}
      <Login/>
    </div>
  )
}

export default App
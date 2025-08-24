import Cookies from 'js-cookie'
import { useState } from "react";
import Login from "./login/Login";
import Splash from "./splash/Splash"

const App = () => {
  const [showSplash, setShowSplash] = useState(!Cookies.get('splashSeen'))
  const [showLogin, setShowLogin] = useState(!Cookies.get('token'))

  return (
    <div>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
      {showLogin && <Login setShowLogin={setShowLogin} />}
    </div>
  )
}

export default App
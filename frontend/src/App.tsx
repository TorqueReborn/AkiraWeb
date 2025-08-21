import { useState } from "react";
import Login from "./login/Login";
import Splash from "./splash/Splash"
import Cookies from 'js-cookie'

const App = () => {
  const [splashSeen, setSplashSeen] = useState(Cookies.get('splashSeen'))
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('token'))

  return (
    <div>
      {!splashSeen && <Splash setSplashSeen={setSplashSeen}/>}
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn}/>}
    </div>
  )
}

export default App
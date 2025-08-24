import Cookies from 'js-cookie'
import { useState } from "react";
import Login from "./login/Login";
import Splash from "./splash/Splash"

const App = () => {
  const [splashSeen, setSplashSeen] = useState(Cookies.get('splashSeen'))

  return (
    <div>
      {!splashSeen && <Splash setSplashSeen={setSplashSeen} />}
      {(splashSeen) && <Login />}
    </div>
  )
}

export default App
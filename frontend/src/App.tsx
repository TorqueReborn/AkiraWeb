import Cookies from 'js-cookie'
import { useState } from "react";
import Splash from "./splash/Splash"

const App = () => {
  const [showSplash, setShowSplash] = useState(!Cookies.get('splashSeen'))

  return (
    <div>
      {showSplash && <Splash setShowSplash={setShowSplash} />}
    </div>
  )
}

export default App
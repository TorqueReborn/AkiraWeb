import Cookies from "js-cookie"
import { useState } from "react"
import Home from "./Pages/Home/Home"
import Splash from "./Splash/Splash"

const App = () => {
  const [splashShown, setSplashShown] = useState(!!Cookies.get('splashShown'))

  return (
    <div>
      {!splashShown && <Splash setSplashShown={setSplashShown}/>}
      {splashShown && <Home/>}
    </div>
  )
}

export default App
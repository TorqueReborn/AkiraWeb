import { useEffect, useState } from "react";
import Login from "./login/Login";
import Splash from "./splash/Splash"
import Cookies from 'js-cookie'

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = Cookies.get('token')
    if(token) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
      {!isLoggedIn && <Login />}
    </div>
  )
}

export default App
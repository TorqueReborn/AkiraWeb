import { useState } from "react";
import Login from "./login/Login";
import Splash from "./splash/Splash"
import Cookies from 'js-cookie'
import Genres from "./genres/Genres";

const App = () => {
  const [splashSeen, setSplashSeen] = useState(Cookies.get('splashSeen'))
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('token'))
  const [selectedGenres, setSelectedGenres] = useState(Cookies.get('genres'))

  return (
    <div>
      {!splashSeen && <Splash setSplashSeen={setSplashSeen} />}
      {(!isLoggedIn && splashSeen) && <Login setIsLoggedIn={setIsLoggedIn} />}
      {(isLoggedIn && splashSeen && !selectedGenres) && <Genres />}
    </div>
  )
}

export default App
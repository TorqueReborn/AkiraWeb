import Splash from "./splash/Splash"
import Spotlight from "./spotlight/Spotlight";

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
      <Spotlight />
    </div>
  )
}

export default App
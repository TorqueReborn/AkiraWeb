import Login from "./login/Login";
import Splash from "./splash/Splash"

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
      <Login />
    </div>
  )
}

export default App
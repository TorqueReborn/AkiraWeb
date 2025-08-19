import Splash from "./splash/Splash"

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
    </div>
  )
}

export default App
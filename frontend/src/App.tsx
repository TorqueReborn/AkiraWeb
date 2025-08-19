import Splash from "./splash/Splash"

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");

  return (
    <div className="font-poppins">
      {splashSeen ? 'Splash Seen' : <Splash />}
    </div>
  )
}

export default App
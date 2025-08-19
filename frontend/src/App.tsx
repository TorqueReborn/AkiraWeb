import Card from "./components/Card";
import Splash from "./splash/Splash"

const App = () => {
  const splashSeen = localStorage.getItem("splashSeen");

  return (
    <div className="font-poppins">
      {splashSeen ? null : <Splash />}
      <Card name="Wealth and Wonder " thumbnail="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155333-K6PB1zA9lcmx.png"/>
    </div>
  )
}

export default App
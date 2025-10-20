import { useEffect } from "react"

const Home = () => {
  useEffect(() => {
    const getData = async () => {
      const test = await fetch(`${import.meta.env.VITE_BACK_END_URL}/anime/trending`)
      const json = await test.json()
      console.log(json)
    }
    getData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default Home
import { useState } from "react"
import SpotCard from "./SpotCard"

const data = [
    {
        _id: "Ak7wmeYf7iZ7azNQh",
        title: "Osomatsu-san Season 4",
        description: "Fourth season of <i>Osomatsu-san</i>.",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/185505-aiHnezTm9aqt.jpg"
    },
    {
        _id: "jiA2YHLsgoTctfnMz",
        title: "Hitozuma no Kuchibiru wa Kan Chuuhai no Aji ga Shite",
        description: "Tsuyoshi, a 22-year-old third-year university student, spends his days juggling classes and his food delivery job, with a can of strong chuuhai always within reach. Living alone in a small apartment, his mundane routine takes an unexpected turn when he finds himself entangled with Yui Koriyama, a married woman he has admired since childhood. What begins as an innocent connection soon escalates into something far more intimate, blurring the lines between longing, desire, and morality. Set against a backdrop of quiet nights and stolen moments, this risqué yet comedic tale explores the thrill and complications of an illicit romance—where every encounter is both intoxicating and dangerous.",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx186789-MNl0ZBiRzDqY.jpg"
    },
    {
        _id: "JFtJun2DSdyXiAxWn",
        title: "Necronomico no Cosmic Horror Show",
        description: "We all need a chance to change our lives!<br>\n<br>\nThe story follows Miko Kurono, who began her dream career as a livestreamer under the name &quot;Necronomico&quot; after graduating middle school. Amidst spending her days with childhood friend Mayu Mayusaka and rival Kanna Kagurazaka, she&apos;s introduced to a new VR game project?!<br>\n<br>\nUpon encountering the game, the girls start pursuing the &quot;irreplacable now.&quot;<br>\n<br>\n(Source: Official site, translated)",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx185505-l2ZcSDvdzhd8.jpg"
    },
]

const Spotlight = () => {
    const [index, setIndex] = useState(0)
    const handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length)
    }

    return (
        <div>
            <SpotCard title={data[index].title} description={data[index].description} image={data[index].image} />
            <button onClick={handleClick}>Next</button>
        </div>
    )
}

export default Spotlight
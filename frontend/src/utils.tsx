import Card from "./components/Card";

interface Edge {
    _id: string;
    name: string;
    thumbnail: string;
}

export const latestAnime = async () => {
    try {
        const response = await fetch('http://localhost:3000/latest');
        const result = await response.json();
        return result.data.shows.edges.map((edge: Edge) => {
            let thumbnail = edge.thumbnail

            if (!thumbnail.startsWith("https://")) {
                thumbnail = 'https://wp.youtube-anime.com/aln.youtube-anime.com/' + thumbnail;
            }
            return <div key={edge._id}>
                <Card name={edge.name} thumbnail={thumbnail} />
            </div>
        })
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    return null
}
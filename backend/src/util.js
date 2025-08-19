const connectAllAnime = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Referer': 'https://allmanga.to',
            }
        });

        if (!response.ok) {
            return await response.text();  
        }
        return response

    } catch (error) {
        return { message: 'Error fetching data from AllAnime API', status: 500 };
    }
}

const parseAnime = (rawJSON) => {
    return rawJSON.data.shows.edges.map(anime => ({
        id: anime._id,
        name: anime.name,
        thumbnail: anime.thumbnail.includes('http') ? anime.thumbnail : `https://wp.youtube-anime.com/aln.youtube-anime.com${anime.thumbnail}`
    }))
}

export { connectAllAnime, parseAnime };
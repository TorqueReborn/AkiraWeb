const connectAllAnime = async (url) => {
    try {
        const response = await fetch(url, {
            headers: {
                'Referer': 'https://allmanga.to',
            }
        });

        if (!response.ok) {
            return { message: 'Failed to fetch data from AllAnime API', status: response.status };
        }
        return await response.json();

    } catch (error) {
        return { message: 'Error fetching data from AllAnime API', status: 500 };
    }
}

const connectSite = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            return { message: 'Failed to fetch data from AllAnime API', status: response.status };
        }
        return await response.json();

    } catch (error) {
        return { message: 'Error fetching data from AllAnime API', status: 500 };
    }
}

export {connectAllAnime, connectSite};
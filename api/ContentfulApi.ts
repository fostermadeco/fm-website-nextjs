const callContentful = async (query: any) => {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`;
    const fetchOptions = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    };

    try {
        const data = await fetch(fetchUrl, fetchOptions).then((response) => response.json());
        return data;
    } catch (error) {
        throw new Error('Could not fetch data from Contentful!');
    }
};

export default callContentful;

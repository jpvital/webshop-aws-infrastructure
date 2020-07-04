var axios = require('axios');
exports.handler = async () => {
    
    const apiKey = process.env.YT_API_KEY;
    const channelId = process.env.YT_CHANNEL_ID;
    const apiUrl = process.env.YT_API_HOST;
    const youtubeApiSearchUrl = `${apiUrl}/search`;

    const searchArgs = {
        part: 'snippet',
        channelId,
        maxResults: 3,
        order: 'date',
        type: 'video',
        key: apiKey,
    };

    const latestVideosMeta = await axios.get(youtubeApiSearchUrl, { params: searchArgs });
    return latestVideosMeta.data.items.map((i) => i.id.videoId);
}
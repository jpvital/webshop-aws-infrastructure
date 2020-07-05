var axios = require('axios');
exports.handler = async (event, context, callback) => {
    
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
    const responseBody = latestVideosMeta.data.items.map((i) => i.id.videoId);
    var response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true
        },
        body: JSON.stringify(responseBody),
        isBase64Encoded: false,
    };
    callback(null, response);
}
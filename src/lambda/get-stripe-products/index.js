const axios = require('axios');

exports.handler = async (event, context, callback) => {
    const apiSecret = process.env.STRIPE_API_SECRET_TEST;
    const apiUrl = process.env.STRIPE_API_HOST;
    const stripeApiProductsUrl = `${apiUrl}/v1/products`;
    const products = await axios.get(stripeApiProductsUrl, { params: { key: apiSecret } });
    const responseBody = products.data.data;

    const response = {
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
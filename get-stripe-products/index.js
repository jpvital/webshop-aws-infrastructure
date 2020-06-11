const axios = require('axios');

exports.handler = async () => {
    const apiSecret = process.env.STRIPE_API_SECRET_TEST;
    const apiUrl = process.env.STRIPE_API_HOST;
    const stripeApiProductsUrl = `${apiUrl}/v1/products`;
    const products = await axios.get(stripeApiProductsUrl, { params: { key: apiSecret } });
    return products.data.data;
}
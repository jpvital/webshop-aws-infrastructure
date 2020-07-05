const AWS = require('aws-sdk');
const uuid = require('uuid');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'eu-west-2' });
exports.handler = (event, context, callback) => {
    const params = {
        Item: {
            Id: uuid.v4(),
            ...event,
            OrderDate: Date.now(),
        },
        TableName: 'Orders',
    };

    docClient.put(params, (err, data) => { 
        if (err) callback(err, null);
        else {
            var response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data),
                isBase64Encoded: false,
            };
            callback(null, response);
        };
    });
};
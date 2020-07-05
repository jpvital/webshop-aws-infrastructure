var aws = require('aws-sdk');
var ses = new aws.SES({region: 'eu-west-2'});

exports.handler = (event, context, callback) => {
    var params = {
        Destination: {
            ToAddresses: [process.env.TEST_TO_ADDRESS]
        },
        Message: {
            Body: { Text: { Data: "Test" } },
            Subject: { Data: "Test Email" }
        },
        Source: process.env.TEST_SOURCE
    };

    
     ses.sendEmail(params, function (err, data) {
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
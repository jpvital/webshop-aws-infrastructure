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
        callback(null, {err: err, data: data});
        if (err) {
            console.log(err);
            context.fail(err);
        } else {
            console.log(data);
            context.succeed(event);
        }
    });
};
#!/bin/sh

sudo apt-get install python-dev python-pip
sudo pip install awscli

aws --version
aws configure set default.output json
aws configure set default.region eu-west-2

echo 'bucket' ${FILESTORE_BUCKET}

aws lambda update-function-code --function-name ${FUNCTION_NAME} --zip-file fileb://lambda_function.zip
aws lambda update-function-configuration --function-name ${FUNCTION_NAME} --environment Variables={FILESTORE_BUCKET=${FILESTORE_BUCKET}} --timeout=20 --memory-size=1024

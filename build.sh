cd $1
echo $1
rm index.zip
zip –X –r ./index.js *
aws lambda update-function-code     --function-name $1     --zip-file fileb://index.zip
cd ..

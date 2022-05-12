// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create DynamoDB document client
var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

//var params = {
//  Item: {
//      'connectionId': "RxJePcnKLPECF9Q=aaa",
//      //'sendTomarca': "helo=a",
//  },
//  TableName: 'connectionsTable-dev'
//};
//
//docClient.put(params, function(err, data) {
//  if (err) {
//    console.log("Error", err);
//  } else {
//    console.log("Success", data);
//  }
//});


//var params = {
//  TableName: 'connectionsTable-dev',
//  Key: {
//      'connectionId': "RxJePcnKLPECF9Q=",
//      'sendTo': "RxJePcnKLPECF9Q=",
//  },
//};
//
//docClient.delete(params, function(err, data) {
//  if (err) {
//    console.log("Error", err);
//  } else {
//    console.log("Success", data);
//  }
//});


var params = {
    ExpressionAttributeValues: {
        ':s': "RxJePcnKLPECF9Q="

    },
    KeyConditionExpression: "connectionId = :s",
    TableName: 'connectionsTable-dev'
};

docClient.query(params, function(err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data);
    }
});

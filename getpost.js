//Event Handler for AWS Lambda Function 

var AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
  
  if (event.httpMethod === 'GET' )
  {
    console.log(event);
    var params = {
      TableName: 'LibraryMS',
      Key: {
        'BookName' : event.BookName
      }
    };
    
    ddb.get(params, function(err, data) 
    {
    if (err) 
    {
      console.log(err);
      callback(err,"Error Occurred");
    }
    else 
    {
      console.log(data);
      callback(null,data);
    }  
    }
    )
  }
    
  if (event.httpMethod === 'POST' )
  {
    console.log(event);
    params = {
      TableName : 'LibraryMS',
      Item : event.body
    };
    
    ddb.put(params, function(err, data) 
    {
    if (err) 
    {
      console.log(err);
      callback(err,"Error Occurred");
    }
    else 
    {
      //console.log(data);
      callback(null,"Book Info Added !!!");
    }  
    }
    );
  }
  
  if (event.httpMethod === 'PATCH' )
  {
    console.log(event);
    params = {
      TableName : 'LibraryMS',
      Key:{
        BookName : event.body.BookName
      },
      UpdateExpression: 'set Author = :x , Publisher = :y',
      ExpressionAttributeValues: {
        ':x' : event.body.Author,
        ':y' : event.body.Publisher
      }
    };
    
    ddb.update(params, function(err, data) 
    {
    if (err) 
    {
      console.log(err);
      callback(err,"Error Occurred");
    }
    else 
    {
      console.log(data);
      callback(null,"Book Info Updated !!!");
    }  
    }
    );
  }
  
  if (event.httpMethod === 'DELETE' )
  {
    console.log(event);
    var params = {
      TableName: 'LibraryMS',
      Key: {
        'BookName' : event.BookName
      }
    };
    
    ddb.delete(params, function(err, data) 
    {
    if (err) 
    {
      console.log(err);
      callback(err,"Error Occurred");
    }
    else 
    {
      console.log(data);
      callback(null,"Book Item Deleted!");
    }  
    }
    )
  }
}

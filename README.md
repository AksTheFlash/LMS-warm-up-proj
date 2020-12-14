# LMS-proj
### A REST API for a Library Management System using AWS API Gateway, Lambda and DynamoDB.

Created four HTTP requests - **GET, POST, PATCH, DELETE** in API Gateway to trigger AWS Lambda Function. 

AWS Lambda invokes event handler to analyse API requests and retrieve,push,update,delete data from DB Table accordingly as per API request type.

DB Table hosted on NoSQL Database-DynamoDB.

New Policy Permissions created under IAM role and configured to grant Lambda Function full access to DB Table hosted on Dynamo DB through ARN ID Reference.

Lambda Function requests are monitored over AWS Cloudwatch, to create console logs.

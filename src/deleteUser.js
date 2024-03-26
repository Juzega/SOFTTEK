const AWS = require("aws-sdk");

const deleteUser = async (event) => {
  try {

    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    await dynamodb
      .delete({
        TableName: "usersTable",
        Key: {
          id,
        },
      })
      .promise();

    return {
      status: 200,
      body: {
        message: 'Deleted User'
      }
    };
    
  } catch (error) {
    console.log(error)        
  }
};

module.exports = {
  deleteUser,
};
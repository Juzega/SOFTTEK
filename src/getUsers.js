const AWS = require("aws-sdk");

const getUsers = async (event) => {
  try{
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({ TableName: "usersTable" }).promise();

    const Users = result.Items;

    return {
      status: 200,
      body: {
          Users,
      },
    };
  } catch (error) {
    console.log(error)        
  }
};

module.exports = {
    getUsers,
};
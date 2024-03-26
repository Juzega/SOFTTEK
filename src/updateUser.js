const uuid = require("uuid");
const AWS = require("aws-sdk");

const updateUser = async (event) => {
  try{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;

    const { nombre, edad } = JSON.parse(event.body);

    await dynamodb
      .update({
        TableName: "usersTable",
        Key: { id },
        UpdateExpression: "set nombre = :nombre, edad = :edad",
        ExpressionAttributeValues: {
          ":nombre": nombre,
          ":edad": edad,
        },
        ReturnValues: "ALL_NEW",
      })
      .promise();

    return {
      status: 200,
      body: {
        message: "Users updated",
      },

    };
  } catch (error) {
    console.log(error)        
  }
};

module.exports = {
  updateUser,
};
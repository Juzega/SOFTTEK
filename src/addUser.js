const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addUser = async(event) => {

    try {

        const dynamodb = new AWS.DynamoDB.DocumentClient();

        const { nombre, edad } = JSON.parse(event.body);
        const fechaCreacion = new Date();
        const id = v4();

        const newUser = {
            id,
            nombre,
            edad,
            fechaCreacion
        }

        await dynamodb.put({
            TableName: 'usersTable',
            Item: newUser
        }).promise();

        return {
            statusCode: 200,
            body: JSON.stringify(newUser)
        }
        
    } catch (error) {
        console.log(error)        
    }
    
} 

module.exports = {
    addUser,
}
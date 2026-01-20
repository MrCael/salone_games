import { MongoClient, ObjectId } from 'mongodb';
import { userName, password, hostname } from './dbConfig.json';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const db = client.db('salone_games');
const userCollection = db.collection('users');

(async function testConnection() {
    try {
        await db.command({ ping: 1 });
    } catch (ex) {
        console.log(`Unable to connect to database with ${url} because ${ex.message}`);
        process.exit(1);
    }
})();

function getUserByUserName(userName) {
    return userCollection.findOne({ userName: userName });
}

async function addUser(user) {
    await userCollection.insertOne(user);
}

module.exports = {
    getUser,
    getUserByUserName
};
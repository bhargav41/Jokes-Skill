const { MongoClient } = require("mongodb");

const dotenv = require("dotenv");

dotenv.config();

let db;

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function initializeClient() {
  try {
    await client.connect();

    return client.db("sensei");
  } catch (e) {
    console.log(`Error : ${e}`);
  }
}

async function getConnection() {
  if (!db) {
    db = await initializeClient();
  }
  return db;
};

module.exports = {
    db: getConnection()
}
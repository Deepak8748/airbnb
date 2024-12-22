require('dotenv').config();
const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;


let _db;  

const mongoConnect = (callback) => {
  MongoClient.connect(process.env.MONGO_URL)
    .then((client) => {
      console.log("Connected To MongoDB");
      callback();
      _db = client.db('airbnb');
    })
    .catch((error) => {
      console.log("Error in Connecting", error);
    });
};

const getdb = () => {
  if(!_db){
    throw new Error('Mongodb not Connected');
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;

const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

const MONGO_URL =
  "mongodb+srv://dk1408264:GuKdVWMJ348rbPeu@mstech.6hii0.mongodb.net/?retryWrites=true&w=majority&appName=MSTECH";

let _db;  

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
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

const { ObjectId } = require("mongodb");
const { getdb } = require("../util/database");

module.exports = class Home {
  constructor(HouseName, Price, Location, Rating, Photo, Description, _id) {
    this.HouseName = HouseName;
    this.Price = Price;
    this.Location = Location;
    this.Rating = Rating;
    this.Photo = Photo;
    this.Description = Description;
    if(_id){
    this._id = _id;
    }
  }

  save() {
    const db = getdb();
    const updatefields = {
      HouseName : this.HouseName,
      Price : this.Price,
      Location : this.Location,
      Rating : this.Rating,
      Photo : this.Photo,
      Description : this.Description
    }
    if(this._id){  //UPDATE
      return db.collection("homes").updateOne({_id : new ObjectId(String(this._id))}, {$set : updatefields})
    } else {   //ADD
    return db.collection("homes").insertOne(this);
    }
  };

  static fetchAll() {
    const db = getdb();
    return db.collection("homes").find().toArray();
  };

  static findById(HomeID) {
    const db = getdb();
    return db.collection("homes").find({_id : new ObjectId(String(HomeID))}).next();
  };

  static deleteById(HomeID) {
    const db = getdb();
    return db.collection("homes").deleteOne({_id : new ObjectId(String(HomeID))});
  };

};

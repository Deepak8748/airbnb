const { getdb } = require("../util/database");

module.exports = class Favourite {
  constructor(Homeid) {
    this.Homeid = Homeid;
  };

  save(){
    const db = getdb();
    return db.collection("favourites").findOne({Homeid : this.Homeid}).then((exixting)=> {
      if(!exixting){
        return db.collection("favourites").insertOne(this);
      }
      return Promise.resolve();
    })
  }

  static getfav() {
    const db = getdb();
    return db.collection("favourites").find().toArray();
  }

  static deleteFavourites(homeId) {
    const db = getdb();
    return db.collection("favourites").deleteOne({Homeid : homeId});
  }
};

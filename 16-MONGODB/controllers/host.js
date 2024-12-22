
const Home = require("../MODELS/home");

exports.homeadded = (req, res, next) => {
    res.render('host/edit-home', {Title : "Register Your Home", editing: false, home : []});
};

exports.EditHome = (req, res, next) => {
  const Homeid = req.params.homeId;
  const editing = req.query.editing === "true";
  Home.findById(Homeid).then((home) => {
    if (!home) {
      res.redirect("/host-homes");
    }
    res.render("host/edit-home", { Title: "Edit Your Home", editing: editing, home : home });
  });
};

exports.PostEditHome = (req, res, next) => {
  const {id, HouseName, Price, Location, Rating, Photo, Description} = req.body;
  const home = new Home(HouseName, Price, Location, Rating, Photo, Description, id);
  home.save().then(() => {
    res.redirect("/host-homes");
  });
};

exports.PostDeleteHome = (req, res, next) => {
  const HomeId = req.params.homeId;
  Home.deleteById(HomeId).then(() => {
    res.redirect("/host-homes");
  }).catch((err) => {
    console.log("error in deleting", err);
  });
  
};

exports.Hosthome = (req, res, next) => {
  Home.fetchAll().then((homes) => {
    res.render("host/host-home-list", { homes: homes, Title: "HOST-HOME" });
  });
};


exports.postAddhome = (req, res, next) => {
  console.log("Home Registered Successfully For :", req.body.HouseName,req.body);
  const {HouseName, Price, Location, Rating, Photo, Description} = req.body;
  const home = new Home(HouseName, Price, Location, Rating, Photo, Description);
  home.save().then(() => {
    console.log("Home Added Successfully");
    res.redirect("/host-homes");
  });
};



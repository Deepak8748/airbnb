const Home = require("../MODELS/home");
const Favourite = require("../MODELS/favourite");

exports.Homepage = (req, res, next) => {
  Home.fetchAll().then((homes) => {
    res.render("store/home-list", {
      homes: homes,
      Title: "HOME-LIST",
    });
  });
};

exports.Index = (req, res, next) => {
  Home.fetchAll().then((homes) => {
    res.render("store/index", {
      homes: homes,
      Title: "INDEX PAGE",
    });
  });
};

exports.Booking = (req, res, next) => {
  Home.fetchAll().then((homes) =>
    res.render("store/booking", { homes: homes, Title: "My Bookings" })
  );
};

exports.Favourite = (req, res, next) => {
  Favourite.getfav().then((favs) => {
    favs = favs.map(fav => fav.Homeid);
    Home.fetchAll().then((homes) => {
      const favhomes = homes.filter((home) => favs.includes(home._id.toString()));
      res.render("store/fav-list", {
        favhomes: favhomes,
        Title: "My Favourites",
      });
    });
  });
};

exports.postFavourite = (req, res, next) => {
  const homeId = req.body.id;
  const fav = new Favourite(homeId);
  fav.save().then((result) => {
    console.log("Home Added", result);
  }).catch((error) => {
    console.log("Error in marking of favourite", error);
  }).finally(() => {
    res.redirect("/favourite");
  })
};

exports.postDeleteFavourite = (req, res, next) => {
  const HomeId = req.params.homeid;
  Favourite.deleteFavourites(HomeId).then((result) => {
    console.log("Home Removed", result);
  }).catch((error) => {
    console.log("Error in removing from favourite", error);
  }).finally(() => {
    res.redirect("/favourite");
  })
};

exports.Homedetails = (req, res, next) => {
  const HomeID = req.params.homeid;
  Home.findById(HomeID).then((home) => {
    if (!home) {
      return res.redirect("/homes");
    } else {
      res.render("store/home-detail", { Title: "Home Detail", home: home });
    }
  });
};

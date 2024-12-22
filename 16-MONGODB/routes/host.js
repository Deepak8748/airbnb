const path = require('path');

const express = require("express");
const hostRouter = express.Router();
const rootDir = require('../util/path');

const homeadd = require('../controllers/host');

hostRouter.get("/host/add-home", homeadd.homeadded);
hostRouter.post("/host/add-home", homeadd.postAddhome );
hostRouter.get("/host-homes", homeadd.Hosthome );
hostRouter.get("/host/edit-home/:homeId", homeadd.EditHome);
hostRouter.post("/host/edit-home", homeadd.PostEditHome);
hostRouter.post("/host/delete-home/:homeId", homeadd.PostDeleteHome);

exports.hostRouter = hostRouter;

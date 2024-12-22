
const express = require('express');
const userRouter = express.Router();
const homeadd = require('../controllers/store');

userRouter.get('/', homeadd.Index);
userRouter.get('/booking', homeadd.Booking);
userRouter.get('/homes', homeadd.Homepage);
userRouter.get('/favourite', homeadd.Favourite);
userRouter.get('/homes/:homeid', homeadd.Homedetails);
userRouter.post('/favourite', homeadd.postFavourite);
userRouter.post('/favourite/delete/:homeid', homeadd.postDeleteFavourite);


module.exports = userRouter;
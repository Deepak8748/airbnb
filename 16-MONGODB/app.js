const path = require("path");

const express = require("express");
const userRouter = require("./routes/user");
const { hostRouter } = require("./routes/host");
const rootDir = require("./util/path");

const error = require("./controllers/error");
const {mongoConnect} = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(error.get404);

mongoConnect(() => {

});
  app.listen(3495);

/*const PORT = 3002;
mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`Server is runnning on http://localhost:${PORT}`);
  });
});*/

const express = require("express");
const path = require("path");

const app = express();
require('dotenv').config()
const cors = require("cors");
require("./db/db");
app.use(express.json());
app.use(cors());


const moviesRoute = require("./routers/Route/moviesRoute");
const sinUpRoute = require("./routers/Route/sinUpRoute");
const logInRoute = require("./routers/Route/logInRoute");
const favortRoute = require("./routers/Route/favortRoute");


app.use(moviesRoute);
app.use(favortRoute);

app.use(sinUpRoute);
app.use(logInRoute);






app.use('/', express.static(path.join(__dirname, '/frontend/build')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

console.log(process.env.PORT)
app.listen(process.env.PORT, ()=>{
    console.log("server is on");
});

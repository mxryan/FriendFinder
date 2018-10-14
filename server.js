// todo:
// html routes
// api routes
// views: home, survey, modal?

const express = require("express");
const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());


// import routes
const setAPIRoutes = require("./app/routing/apiRoutes");
setAPIRoutes(app);
const setHTMLRoutes = require("./app/routing/htmlRoutes");
setHTMLRoutes(app);


app.listen(PORT, function(){
  console.log("Server is listening at port: " + PORT);
})
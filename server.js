// todo:
// views: home, survey, modal?
// user can navigate to home page which explains the app
// user can click a button which takes them to survey page
// user completes the survey and submits it
// upon submission they recieve their best "friend match"

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
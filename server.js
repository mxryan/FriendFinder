const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const setAPIRoutes = require("./app/routing/apiRoutes");
const setHTMLRoutes = require("./app/routing/htmlRoutes");
setAPIRoutes(app);
setHTMLRoutes(app);


app.listen(PORT, function(){
  console.log("Server is listening at port: " + PORT);
})
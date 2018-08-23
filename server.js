var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(express.static('app'));

//this is the listner that "starts" our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
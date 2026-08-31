const express = require("express");
const userDB = require("./model/userDB");


const app = express();

//*** Middleware */
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static('public'));


//** Initial Page Load */
app.get("/", function (req, res) {
    res.render("index");
});

//** Web API */
app.get("/users",function(req,res){
  userDB.getUsers(function(err,result,fields){
    res.json(result);
  });
});


app.listen(3000, function () {
  console.log("Listening on port 3000..");
});

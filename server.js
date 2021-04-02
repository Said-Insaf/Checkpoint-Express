var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.static("pages"));

const Date = new Date();
const day = Date.getDay();
const hours = Date.getHours();

app.use((req, res, next) => {
  if (day >= 1 && day <= 5 && hours >= 9 && hours < 17) {
    next();
  } else {
    res.render("pages/OutService");
  }
});
// use res.render to load up an ejs view file

// Home page
app.get('/', function(req, res) {
    res.send('pages/Home');
});
//Contact page
app.get("/contact", (req, res) => {
    res.render("pages/Contactus");
  });
  //Service Page
  app.get("/services", (req, res) => {
    res.render("page/OurServices");
  });




app.listen(5000, () => {
    console.log("the server is running on port 5000");
  });
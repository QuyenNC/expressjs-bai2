// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

//using pug
app.set('view engine', 'pug');
 app.set('views', './views');

// our default array of dreams
const dreams = [
  "Đi chợ",
  "Rửa bát",
  "Nấu cơm",
  "Học code tại CodersX"
];


// send the default array of dreams to the webpage
app.get("/todos", (request, response) => {
  response.render('index',{
    todoslist : dreams
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// Express Imports

const myData = require("./data5");

const express = require("express")
const app = express();
const port = process.env.PORT || 3000;



app.use(express.static("../public"))
// app.use(express.static("./app.js"));
// app.use(express.static("./index.html"));

// app.use(express.static("./styles.css"));

// app.use(express.static("../ipl/economicBowler.js"));
// app.use(express.static("../ipl/extraRunByTeam.js"));
// app.use(express.static("../ipl/matchesPlayedByCity.js"));
// app.use(express.static("../ipl/matchesPlayedPerYear.js"));
// app.use(express.static("../ipl/matchesWonByEachTeam.js"));
// app.use(express.static("../ipl/yearWiseBowler.js"));
// app.use(express.static("/index.js"));



app.get('/', (req, res) => {

  res.sendFile(__dirname + "/index.html");
  
});

app.get("/pp", (req, res) => {

  res.sendFile(__dirname + "/styles.css");

});

app.get("/", (req, res) => {

  res.sendFile(__dirname + "/app.js");
  
});

app.get("/", (req, res) => {

  res.sendFile(__dirname + "/app1.js");
  
});


app.get("/", (req, res) => {

  res.sendFile("../index.js");
  return
});

app.get('/api', (req, res) => {
  //res.send(req.query.YEAR);
  // res.sendFile(__dirname+"/data3.json");
  const year = req.query.YEAR

   var a = {};
  // for (let x in myData) {
  //   a[x] = myData[x];

  // }

  // const seriesData = [];
  // for (let name in a[year]) {
  //   seriesData.push([name, a[year][name]]);
  // }
  a[year]=myData[year];
  // console.log(a);
  res.send(a)

  return

});


app.listen(port);




var express = require('express');
var bodyParser = require('body-parser');

var request = require('request');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
 var items = require('../database-mongo/index.js');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));

//UNCOMMENT FOR ANGULAR
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));


app.post("/items", (req, res) => {

	console.log("server is posting")
  console.log("req.body",req.body.description)
  var data2=req.body
	items.save(data2,function(result){
		res.send('done')
	})

 
});



app.get('/items', function (req, res) {

  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
  
});

// app.get('/diaries',function(req,res){
// 	res.send(diaries)
// })

app.listen(process.env.PORT || 3000, function() {
  console.log('listening on port 3000!');
});


// app.post('/diaries', function (req, res) {

//   var input=req.body.data;  
//   console.log("BACKEND POST SERVER:",input)

//  githup.getReposByUsername(user_name , function (azhar) { 	
//  console.log("SERVER GET FORM GITHUB:",typeof azhar)
//  var parsed = azhar.parse

//   Save.save(parsed);
//  }) 

//  // console.log("we got respone")
//  res.send("done post")
// });

var mongoose = require('mongoose'); //include mongoose in our project
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Ghadeer:@gg835864@ds115664.mlab.com:15664/diary-db');// and open a connection to the test database on our locally running instance of MongoDB.


//We have a pending connection to the test database running on localhost. 
//We now need to get notified if we connect successfully or if a connection error occurs
//Once our connection opens, our callback will be called
var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

//everything is derived from a Schema in mongoose. Let's get a reference to it and define our schema
var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema); //compiling our schema into a Model. A model is a class with which we construct documents.
// In this case, each document will be an item with properties and behaviors as declared in our schema.
// var save = db.collection.save(
//    <document>,
//    {
//      writeConcern: <document>
//    }
//)

var save = function(data,cb){
         Item.collection.insertMany(data,function(err,result){
         if (result){
          cb(result)
         }
       })
}


  var selectAll = function(callback) {
    Item.find({}, function(err, items) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, items);
      }
    });
  };
module.exports.save = save;
module.exports.selectAll = selectAll;




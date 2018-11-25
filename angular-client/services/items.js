angular.module('app')
.service('itemsService', function($http) {
  this.getAll = function(callback) {
    $http.get('/items')
    .then(function({data}) {
      if(callback) {
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});

angular.module('app')
.service('itemsService2', function($http) {
  this.postAll = function(data,callback) {
    console.log("what the input is3333333:",data)


    $http.post('/items',{description: data}).then(function(res2) {
     
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});


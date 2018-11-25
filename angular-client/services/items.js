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
  this.postAll = function(callback) {
    $http.post('/items')
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
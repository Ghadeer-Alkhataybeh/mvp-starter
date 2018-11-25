angular.module('app')
.controller('AppCtrl', function(itemsService) {
  itemsService.getAll((data) => {
    this.items = data;
    console.log('hhjhjhjhjhj',data)
  });

// var a =function(){
// 	console.log('tftftf')
// itemsService.getAll(function(data){
// 	console.log(data)
// })
// }

})
.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});
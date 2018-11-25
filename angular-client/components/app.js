angular.module('app')
.controller('AppCtrl', function(itemsService) {
  itemsService.getAll((data) => {
    this.items = data;
    console.log('gotten data',data)
  });
})




.component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/app.html'
});
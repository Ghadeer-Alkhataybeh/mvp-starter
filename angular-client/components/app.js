angular.module('app')
.controller('AppCtrl', function(itemsService,itemsService2) {
	this.input;
	this.show = () => {
		itemsService.getAll((data) => {
			this.items = data;
			console.log('gotten data',data)
		});
	};

	this.save = (input) => {
		console.log('input 2222:  ',input)

		itemsService2.postAll(input,(res2) => {
			
		});
	}


})




.component('app', {
	bindings: {},
	controller: 'AppCtrl',
	templateUrl: '/templates/app.html'
});
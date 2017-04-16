
APP = angular.module('App', ['ngRoute']);



APP.controller('Form', function($scope, $locale) {
	$scope.inputs = [
		{name: 'userPhone', type: 'text', value: '', placeholder: 'Ваш номер телефона', visible: true, required: true, maxLength: undefined, minLength:undefined, pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/},
		{name: 'userName', type: 'text', value: '', placeholder: 'Ваше имя', visible: true, required: false, maxLength: 15, minLength: 3, pattern: /^[_a-zA-Z0-9а-яА-Я ]+$/},
		{name: 'userMail', type: 'email', value: '', placeholder: 'Ваш Email', visible: true, required: false, maxLength: 40, minLength: 3, pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/}
	];
	$scope.checking = function(input, form) {
		// console.log($scope.contacts.$valid && $scope.contacts.$dirty);
		// console.log($scope.contacts.userPhone.$valid);
		// input - userPhone, form - contacts
		console.log(form.$valid && form.$dirty); // все отлично для формы целиком
		console.log(typeof(input)); // object
		console.log(typeof(input.name)); // string
		console.log(input.name.$valid); // разумеется undefined
	}


});

APP.controller('Phones', function($scope, $locale) {
	$scope.phones = [
		{number: '8-918-135-10-04', status: true},
		{number: '8-918-135-10-05', status: false},
		{number: '8-918-135-10-06', status: false},
		{number: '8-918-135-10-07', status: true}
	];

})

var app = angular.module('myDirectives', []);

app.directive('pending', function(){
	return {
		restrict: 'A',
		Scope: {

		},
		link: function(scope, elem, attr) {
		}
	}
});
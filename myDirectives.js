var app = angular.module('myDirectives', []);

app.directive('pendingDirective', function($q){
	return {
		restrict: 'E',
        template: "<div ng-show='load'><img src='http://www.ajaxload.info/cache/FF/FF/FF/00/00/00/5-0.gif'></div>",
		link: function(scope, elem, attr) {

		}
	}
});
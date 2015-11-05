var app = angular.module('directiveWorkshop', ['myDirectives']);

app.controller('mainCtrl', function($scope, mainService){
	$scope.songData;
	$scope.load = false;
	$scope.getData = function () {
		$scope.load = true;
        mainService.getData($scope.query).then(function(res){
        	$scope.load = false;
        	$scope.query = "";
        	$scope.songData = res;
        });
    };
});
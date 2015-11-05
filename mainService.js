var app = angular.module('directiveWorkshop');

app.service('mainService', function($http, $q){
	var defer = $q.defer();
	this.getData = function(artist) {
        $http({
        	method: 'JSONP',
        	 url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
        	}).then(function(res) {
            defer.resolve(res);
        });
        return defer.promise;
    };
})
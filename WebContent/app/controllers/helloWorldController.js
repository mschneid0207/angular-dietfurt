var app = angular.module('myapp', []);
 
    app.controller('HelloWorldController', function($scope){
        $scope.variable = "AngularJS Hello World!!!";
    });
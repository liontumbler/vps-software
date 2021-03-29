var app = angular.module("myApp", ['ngAnimate', 'ngRoute', 'ui.bootstrap']);
app.config(function($routeProvider) {

  $routeProvider
  .when("/", {
    templateUrl : "uno.html",
    controller : "unoCtrl"
  })
  .when("/dos", {
    templateUrl : "dos.html",
    controller : "dosCtrl"
  })
  .when("/tres", {
    templateUrl : "tres.html",
    controller : "tresCtrl"
  })
  .when("/cuatro", {
    templateUrl : "cuatro.html",
    controller : "cuatroCtrl"
  })
  .otherwise({
    template : "<h1>None</h1><p>Nothing has been selected</p>"
  });
  
});


app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
});



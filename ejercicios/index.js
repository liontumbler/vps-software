var app = angular.module("myApp", ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.bootstrap']);
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
    template : "<div class='text-center'><h1>Error 300</h1><p>Dígito o ingreso a una opción no permitida</p></div>"
  });
  
});


app.controller('CollapseDemoCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
});



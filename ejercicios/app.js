var app = angular.module("myApp", ['ngAnimate', 'ngSanitize', 'ngRoute', 'ui.bootstrap']);
app.config(function($routeProvider) {

  $routeProvider
  .when("/", {
    templateUrl : "views/uno.html",
    controller : "unoCtrl"
  })
  .when("/dos", {
    templateUrl : "views/dos.html",
    controller : "dosCtrl"
  })
  .when("/tres", {
    templateUrl : "views/tres.html",
    controller : "tresCtrl"
  })
  .when("/cuatro", {
    templateUrl : "views/cuatro.html",
    controller : "cuatroCtrl"
  })
  .when("/ejerConsumoDb", {
    templateUrl : "views/ejerConsumoDb.html",
    controller : "ejerConsumoDbCotroller"
  })
  .otherwise({
    template : "<div class='text-center'><h1>Error 300</h1><p>Dígito o ingreso a una opción no permitida</p></div>"
  });
  
});


app.controller('CollapseCtrl', function ($scope) {
  $scope.isNavCollapsed = true;
});



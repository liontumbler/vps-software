//var app = angular.module('myApp', []);
app.controller('tresCtrl', function($scope) {

  

  //iniciacion de variables
  $scope.n = "";
  $scope.max = 0;
  $scope.min = 0;

  //escucha cuando teclea
  $scope.mym = function() {
    
    $scope.array = [];
    $scope.max = 0;
    $scope.min = 0;

    let i;
    for (i = 0; i < $scope.n; i++) {
        var numero = Math.floor(Math.random()*100);
        $scope.array.push(numero);
    }

    //Analizando, reune las sumas
    var con = [];

    let e;
    let o;
    for (e = 0; e < $scope.array.length; e++) {
        var numero_sumas = [];

        for (o = 0; o < $scope.array.length; o++) {
            if (o != e) {
                numero_sumas.push($scope.array[o]);
            }
        }
        con.push(numero_sumas);
    }
    console.log(con);

    //Hago las suma
    $scope.sumas = [];
    for (o = 0; o < con.length; o++) {
        suma = 0;

        for (e = 0; e < con[o].length; e++) {
            suma += con[o][e];
        }
        $scope.sumas.push(suma);
    }
    console.log($scope.sumas);

    //muestra el maximo y el minimo
    $scope.max = Math.max.apply(null,$scope.sumas);
    $scope.min = Math.min.apply(null,$scope.sumas);

  };

});
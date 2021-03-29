//var app = angular.module('myApp', []);
app.controller('cuatroCtrl', function($scope) {

  

  $scope.n = "";
  $scope.sumad1 = 0;
  $scope.sumad2 = 0;
  
  $scope.metodo = function () {
    
    $scope.array = [];
    $scope.sumad1 = 0;
    $scope.sumad2 = 0;

    //creo la matriz
    let i;
    let e;
    for (i = 0; i < $scope.n; i++) {
      $scope.array[i] = [];
      
      for (e = 0; e < $scope.n; e++) {
        var numero = Math.floor(Math.random() * (50));
        $scope.array[i].push(numero);
      }
    }

    //console.log($scope.array);
    //selecion las diagonales y las sumo
    for (i = 0; i < $scope.array.length; i++) {
      for (e = 0; e < $scope.array[i].length; e++) {
        if (i==e) {
          $scope.sumad1 += $scope.array[i][e];
          $scope.sumad2 += $scope.array[i][(($scope.array[i].length - 1) - e)];
        }
      }
    }

    //console.log($scope.sumad1);
    //console.log($scope.sumad2);
  }

});
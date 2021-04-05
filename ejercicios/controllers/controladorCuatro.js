app.controller('cuatroCtrl', function($scope) {

  let i;
  let e;
  var numero;
  
  $scope.cuatro = {
    n: '',
    sumaUno: 0,
    sumaDos: 0,
    diferencia: 0,
    matriz: [],
    numerosUnoMatriz: [],
    numerosDosMatriz: []
  }
  
  $scope.correr = function () {

    if ($scope.cuatro.n % 1 == 0) {

      $scope.cuatro.matriz = [];

      $scope.numerar();

    } else {
      alert ("Solo numeros enteros positivos");
      $scope.cuatro.n = "";
    }
  
  }

  $scope.escuchar = function () {
    
    $scope.cuatro.sumaUno = 0;
    $scope.cuatro.sumaDos = 0;
    for (i = 0; i < $scope.cuatro.matriz.length; i++) {
      for (e = 0; e < $scope.cuatro.matriz[i].length; e++) {

        if (i==e) {
          $scope.cuatro.numerosUnoMatriz[i] = $scope.cuatro.matriz[i][e];
          $scope.cuatro.numerosDosMatriz[i] = $scope.cuatro.matriz[i][(($scope.cuatro.matriz[i].length - 1) - e)];

          $scope.cuatro.sumaUno += $scope.cuatro.matriz[i][e];
          $scope.cuatro.sumaDos += $scope.cuatro.matriz[i][(($scope.cuatro.matriz[i].length - 1) - e)];
        }
      }
    }

    $scope.cuatro.diferencia = Math.abs(($scope.cuatro.sumaUno - $scope.cuatro.sumaDos));

  }

  $scope.limpiar = function () {

    $scope.cuatro.numerosUnoMatriz = [];
    $scope.cuatro.numerosDosMatriz = [];
    $scope.cuatro.sumaUno = 0;
    $scope.cuatro.sumaDos = 0;
    $scope.cuatro.diferencia = 0;

    for (i = 0; i < $scope.cuatro.matriz.length; i++) {
      for (e = 0; e < $scope.cuatro.matriz[i].length; e++) {
        $scope.cuatro.matriz[i][e] = "";
      }
    }
    
  }

  $scope.numerar = function () {
    $scope.cuatro.numerosUnoMatriz = [];
    $scope.cuatro.numerosDosMatriz = [];
    $scope.cuatro.sumaUno = 0;
    $scope.cuatro.sumaDos = 0;
    $scope.cuatro.diferencia = 0;

    //creo la matriz
    for (i = 0; i < $scope.cuatro.n; i++) {
      $scope.cuatro.matriz[i] = [];
      
      for (e = 0; e < $scope.cuatro.n; e++) {
        numero = Math.floor(Math.random() * (50));
        $scope.cuatro.matriz[i].push(numero);
      }
    }

    for (i = 0; i < $scope.cuatro.matriz.length; i++) {
      for (e = 0; e < $scope.cuatro.matriz[i].length; e++) {
        if (i == e) {
          $scope.cuatro.numerosUnoMatriz.push($scope.cuatro.matriz[i][e]);
          $scope.cuatro.numerosDosMatriz.push($scope.cuatro.matriz[i][(($scope.cuatro.matriz[i].length - 1) - e)]);
          $scope.cuatro.sumaUno += $scope.cuatro.matriz[i][e];
          $scope.cuatro.sumaDos += $scope.cuatro.matriz[i][(($scope.cuatro.matriz[i].length - 1) - e)];
        }
      }
    }

    $scope.cuatro.diferencia = Math.abs(($scope.cuatro.sumaUno - $scope.cuatro.sumaDos));
  }

});



app.controller('tresCtrl', function($scope) {

  let i;
  let e;
  let o;
  var numero;
  var numeroSumas;

  $scope.tres = {
    n: '',
    max: 0,
    min: 0,
    arrayNumeros: [],
    arrayCon: [],
    sumas: []
  }

  //escucha cuando teclea 
  $scope.calcular = function() {

    if ($scope.tres.n % 1 == 0) {
    
      $scope.tres.arrayNumeros = [];
      
      $scope.numerar();

    } else {
      alert ("Solo numeros enteros positivos");
      $scope.tres.n = "";
    }

  };

  $scope.numerar = function () {

    $scope.tres.max = 0;
    $scope.tres.min = 0;
    for (i = 0; i < $scope.tres.n; i++) {
      numero = Math.floor(Math.random()*100);
      $scope.tres.arrayNumeros[i] = numero;
    }

    $scope.escuchar();
    
  }

  $scope.limpiar = function () {
    $scope.tres.max = 0;
    $scope.tres.min = 0;
    $scope.tres.arrayCon = [];
    $scope.tres.sumas = [];

    for (i = 0; i < $scope.tres.arrayNumeros.length; i++) {
      $scope.tres.arrayNumeros[i] = "";
    }
  }

  $scope.escuchar = function () {
    
    //Analizando, reune las sumas
    $scope.tres.arrayCon = [];
    for (e = 0; e < $scope.tres.arrayNumeros.length; e++) {
      numeroSumas = [];

      for (o = 0; o < $scope.tres.arrayNumeros.length; o++) {
        if (o != e) {
            numeroSumas.push($scope.tres.arrayNumeros[o]);
        }
      }
      $scope.tres.arrayCon.push(numeroSumas);
    }
    //console.log(con);

    //Hago las suma
    $scope.tres.sumas = [];
    for (o = 0; o < $scope.tres.arrayCon.length; o++) {
      suma = 0;

      for (e = 0; e < $scope.tres.arrayCon[o].length; e++) {
        suma += $scope.tres.arrayCon[o][e];
      }
      $scope.tres.sumas.push(suma);
    }
    //console.log($scope.tres.sumas);

    //muestra el maximo y el minimo
    $scope.tres.max = Math.max.apply(null,$scope.tres.sumas);
    $scope.tres.min = Math.min.apply(null,$scope.tres.sumas);

  }

});
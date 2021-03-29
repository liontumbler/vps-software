app.controller('dosCtrl', function($scope) {

  $scope.n = "";
  $scope.array = [];  

  //escucha el teclado en el input
  $scope.metodo2 = function() {

    if ($scope.n % 1 == 0) {

      $scope.showWarning = true;

      $scope.array = [];

      let i;
      for (i = 0; i < $scope.n; i++) {
        var numero1 = Math.floor(Math.random() * (50));
        var numero2 = Math.floor(Math.random() * (50));

        var result = numero1 + numero2;

        var gra = result;//0;//"";
        //let e;
        /*for (e = 0; e < result; e++) {
          //gra += "*";
          //gra += 1;
        }*/

        //grega objeto al arreglo
        $scope.array.push({a:numero1, b:numero2, c:result, grafica:gra});
      }

    } else {
      alert ("Solo numeros enteros positivos");
      $scope.n = "";
    }

  }

});
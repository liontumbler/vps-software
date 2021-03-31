app.controller('dosCtrl', function($scope) {

  let i;
  var numero1;
  var numero2;
  var result;
  var gra;

  $scope.dos = {
    n: '',
    arraySumas: []
  }
  
  //escucha el teclado en el input
  $scope.crear = function() {

    if ($scope.dos.n % 1 == 0) {

      $scope.dos.showWarning = true;

      $scope.dos.arraySumas = [];
      for (i = 0; i < $scope.dos.n; i++) {
        //grega objeto al arreglo
        $scope.dos.arraySumas.push({a:'', b:'', c:'', grafica:''});
      }

    } else {
      alert ("Solo numeros enteros positivos");
      $scope.dos.n = "";
    }

  }

  $scope.numerar = function () {

    for (i = 0; i < $scope.dos.arraySumas.length; i++) {
      numero1 = Math.floor(Math.random() * (50));
      numero2 = Math.floor(Math.random() * (50));

      result = numero1 + numero2;

      gra = result;
      
      //grega objeto al arreglo
      $scope.dos.arraySumas[i].a = numero1;
      $scope.dos.arraySumas[i].b = numero2;
      $scope.dos.arraySumas[i].c = result;
      $scope.dos.arraySumas[i].grafica = gra;

      //console.log($scope.dos.arraySumas);

    }
  }

  $scope.limpiar = function () {
    for (i = 0; i < $scope.dos.arraySumas.length; i++) {
    
      //grega objeto al arreglo
      $scope.dos.arraySumas[i].a = '';
      $scope.dos.arraySumas[i].b = '';
      $scope.dos.arraySumas[i].c = '';
      $scope.dos.arraySumas[i].grafica = '';

    }
  }

  $scope.calcular = function () {
    for (i = 0; i < $scope.dos.arraySumas.length; i++) {

      if ($scope.dos.arraySumas[i].a != '' && $scope.dos.arraySumas[i].b != '') {
        result = $scope.dos.arraySumas[i].a + $scope.dos.arraySumas[i].b;
        gra = result;

        $scope.dos.arraySumas[i].c = result;
        $scope.dos.arraySumas[i].grafica = gra;
      }

    }
  }

});
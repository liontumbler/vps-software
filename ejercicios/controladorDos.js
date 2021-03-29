//var app = angular.module('myApp', []);
app.controller('dosCtrl', function($scope) {



  $scope.n="";
  $scope.names=[];  

  $scope.metodo2 = function() {

    $scope.names=[];

    let i;
    for (i = 0; i < $scope.n; i++) {
      
      var numero1 = Math.floor(Math.random() * (50));
      var numero2 = Math.floor(Math.random() * (50));

      var result = numero1 + numero2;

      var gra = result;//0;//"";
      let e;
      /*for (e = 0; e < result; e++) {
        //gra += "*";
        //gra += 1;
      }*/

      //grega objeto al arreglo
      $scope.names.push({a:numero1, b:numero2, c:result, grafica:gra});
    
    }
  }

    
  
});
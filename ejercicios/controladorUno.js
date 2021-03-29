app.controller('unoCtrl', function($scope) {

  $scope.personajes = [
    {id: 0, type: 'no viviente', name: 'ROCA', simbolo: 'R', poder: ['L','T'], imagen: "../img/roca.jpeg"},
    {id: 1, type: 'no viviente',  name: 'PAPEL', simbolo: 'P', poder: ['R','K'], imagen: "../img/papel.jpeg"},
    {id: 2, type: 'no viviente', name: 'TIJERAS', simbolo: 'T', poder: ['L','P'], imagen: "../img/tijera.jpeg"},
    {id: 3, type: 'viviente', name: 'LAGARTO', simbolo: 'L', poder: ['P','K'], imagen: "../img/lagarto.jpeg"},
    {id: 4, type: 'viviente',  name: 'SPOCK', simbolo: 'K', poder: ['R','T'], imagen: "../img/spock.jpeg"}
  ];

  $scope.player1 = "";
  $scope.player2 = "";
  $scope.opcion1 = "";
  $scope.opcion2 = "";
  $scope.respuesta = "";
  $scope.imagen1 = "";
  $scope.imagen2 = "";

  //metodo:
  $scope.metodo = function() {
    //console.log($scope.personajes[$scope.opcion1].poder[0]);

    //agregar imagen si es select esta lleno
    if ($scope.opcion1 !== "") {
      $scope.imagen1 = $scope.personajes[$scope.opcion1].imagen;
    }
    if ($scope.opcion2 !== "") {
      $scope.imagen2 = $scope.personajes[$scope.opcion2].imagen;
    }

    //valida si el nombre y la opcion de player 1 y 2 estan vacias
    if ($scope.opcion1 === "" || $scope.player1 == "") {
      $scope.respuesta = "Validar datos de player 1";
    }else if ($scope.opcion2 === "" || $scope.player2 == "") {
      $scope.respuesta = "Validar datos de player 2";
    }else{

      //contadores que determinan quien es el ganador
      var con = 0;
      var con2 = 0;

      //valida si el player uno le gana al dos
      let e;
      var hasta = $scope.personajes[$scope.opcion1].poder.length;
      for (e = 0; e < hasta; e++) {
        if ($scope.personajes[$scope.opcion1].poder[e] == $scope.personajes[$scope.opcion2].simbolo) {
          con = 1;
        }
      }

      //valida si el player dos le gana al uno
      let a;
      var hasta2 = $scope.personajes[$scope.opcion2].poder.length;
      for (a = 0; a < hasta2; a++) {
        if ($scope.personajes[$scope.opcion2].poder[a] == $scope.personajes[$scope.opcion1].simbolo) {
          con2 = 1;
        }

        //Intente cambiar el if anterior a un if terniario, si corrio pero al momento de hacer la validacion la hace mal, por que?
        //lo intente de dos formas y las dos no arrojaron error pero validan igual, osa mal
        //$scope.personajes[$scope.opcion2].poder[a] == $scope.personajes[$scope.opcion1].simbolo ? con2 = 1 : con2 = 0;
        //con2 = $scope.personajes[$scope.opcion2].poder[a] == $scope.personajes[$scope.opcion1].simbolo ? 1 : 0;
      }

      //validacion del contador
      if (con == 0 && con2 == 0 || con == con2) {
        //console.log("Empate!!");
        $scope.respuesta = "Empate!!";
      }else if (con > con2) {
        //console.log("Gana el player 1");
        $scope.respuesta = "Gana el P1: "+$scope.player1;
      }else if (con2 > con) {
        //console.log("Gana el player 2");
        $scope.respuesta = "Gana el P2 "+$scope.player2;
      }

    }
    
  }

});
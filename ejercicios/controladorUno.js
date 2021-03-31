app.controller('unoCtrl', function($scope) {

  var hasta;
  var hasta2;
  var con;
  var con2;
  let e;
  let a;

  $scope.personajes = [
    {id: 0, type: 'no viviente', name: 'ROCA', simbolo: 'R', poder: ['L','T'], imagen: "../img/roca.jpeg"},
    {id: 1, type: 'no viviente',  name: 'PAPEL', simbolo: 'P', poder: ['R','K'], imagen: "../img/papel.jpeg"},
    {id: 2, type: 'no viviente', name: 'TIJERAS', simbolo: 'T', poder: ['L','P'], imagen: "../img/tijera.jpeg"},
    {id: 3, type: 'viviente', name: 'LAGARTO', simbolo: 'L', poder: ['P','K'], imagen: "../img/lagarto.jpeg"},
    {id: 4, type: 'viviente',  name: 'SPOCK', simbolo: 'K', poder: ['R','T'], imagen: "../img/spock.jpeg"}
  ];

  $scope.uno={
    player1:{
      nombre: '',
      opcion: '',
      imagen: ''
    },
    player2:{
      nombre: '',
      opcion: '',
      imagen: ''
    },
    respuesta: ''
  };

  $scope.cambiarImagen = function () {
    //agregar imagen si es select esta lleno
    if ($scope.uno.player1.opcion !== "") {
      $scope.uno.player1.imagen = $scope.personajes[$scope.uno.player1.opcion].imagen;
    }
    if ($scope.uno.player2.opcion !== "") {
      $scope.uno.player2.imagen = $scope.personajes[$scope.uno.player2.opcion].imagen;
    }
  }

  //metodo:
  $scope.jugar = function () {
    //console.log($scope.personajes[$scope.opcion1].poder[0]);

    //valida si el nombre y la opcion de player 1 y 2 estan vacias
    if ($scope.uno.player1.opcion === "" || $scope.uno.player1.nombre == "") {
      $scope.uno.respuesta = "Validar datos de player 1";
    }else if ($scope.uno.player2.opcion === "" || $scope.uno.player2.nombre == "") {
      $scope.uno.respuesta = "Validar datos de player 2";
    }else{

      //contadores que determinan quien es el ganador
      con = 0;
      con2 = 0;

      //valida si el player uno le gana al dos
      hasta = $scope.personajes[$scope.uno.player1.opcion].poder.length;
      for (e = 0; e < hasta; e++) {
        if ($scope.personajes[$scope.uno.player1.opcion].poder[e] == $scope.personajes[$scope.uno.player2.opcion].simbolo) {
          con = 1;
        }
      }

      //valida si el player dos le gana al uno
      hasta2 = $scope.personajes[$scope.uno.player2.opcion].poder.length;
      for (a = 0; a < hasta2; a++) {
        if ($scope.personajes[$scope.uno.player2.opcion].poder[a] == $scope.personajes[$scope.uno.player1.opcion].simbolo) {
          con2 = 1;
        }

        //Intente cambiar el if anterior a un if terniario, si corrio pero al momento de hacer la validacion la hace mal, por que?
        //lo intente de dos formas y las dos no arrojaron error pero validan igual, osa mal
        //$scope.personajes[$scope.uno.player2.opcion].poder[a] == $scope.personajes[$scope.uno.player1.opcion].simbolo ? con2 = 1 : con2 = 0;
        //con2 = $scope.personajes[$scope.uno.player2.opcion].poder[a] == $scope.personajes[$scope.uno.player1.opcion].simbolo ? 1 : 0;
      }

      //validacion del contador
      if (con == 0 && con2 == 0 || con == con2) {
        //console.log("Empate!!");
        $scope.uno.respuesta = "Empate!!";
      }else if (con > con2) {
        //console.log("Gana el player 1");
        $scope.uno.respuesta = "Gana el P1: "+$scope.uno.player1.nombre;
      }else if (con2 > con) {
        //console.log("Gana el player 2");
        $scope.uno.respuesta = "Gana el P2 "+$scope.uno.player2.nombre;
      }

    }
    
  }

});
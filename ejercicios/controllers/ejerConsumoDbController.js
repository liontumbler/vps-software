app.controller('ejerConsumoDbCotroller', function($uibModal, $log, $http) {

  //remplaza al $scope por usar el modal
  var modal = this;

  modal.tablas = {
    productos : {
      cabecera : [
        'ProductID',
        'ProductName',
        'SupplierID',
        'CategoryID',
        'QuantityPerUnit',
        'UnitPrice',
        'UnitsInStock',
        'UnitsOnOrder',
        'ReorderLevel',
        'Discontinued'
      ],
      todos : '',
      uno : ''
    },
    clientes : {
      cabecera : [
        'CustomerID',
        'CompanyName',
        'ContactName',
        'ContactTitle',
        'Address',
        'City',
        'Region',
        'PostalCode',
        'Country',
        'Phone',
        'Fax',
      ],
      todos : '',
      uno : ''
    }

  };

  modal.myOrderByProductos = '';
  modal.myOrderByClientes = '';

  modal.reverseProductos = false;
  modal.reverseClientes = false;

  //obtiene todos los productos
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json")
  .then(function(response) {
    modal.tablas.productos.todos = response.data.value;
  });

  //obtiene todos los customers
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json")
  .then(function(response) {
    modal.tablas.clientes.todos = response.data.value;
  });

  //obtiene un producto por id
  modal.mostrarDetallesProducto = function (id) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$filter=ProductID eq "+id+"&$format=json")
    .then(function(response) {
      //obtiene el producto
      modal.tablas.productos.uno = response.data.value;
      //inicia y abre el modal
      var modalInstance = $uibModal.open({
        animation: true,
        //cerrar solo con botones ok cancel
        backdrop : 'static',
        //quita la accion de salir por teclado esc
        keyboard :false,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/modal/modalProducto.html',
        controller: 'ModalCtrlProducto',
        controllerAs: 'modal',
        size: 'lg',
        resolve: {
          data: function () {
            return [modal.tablas.productos.cabecera, modal.tablas.productos.uno];
          }
        }
      });

    });
  }

  modal.editarProducto = function (id) {
    alert("escucho pa editar "+id);
  }

  modal.elimininarProducto = function (id) {

    if (confirm("Seguro desea eliminar id: "+id)) {

      /*$http.delete("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$filter=CustomerID eq '"+id+"'&$format=json")
      .then(function(response) {
        
        alert(response);
        
      });*/
    
    }else{
      alert("Cancelada la operacion");
    }

  }

  //ordena los productos de desc/asc segun la x que le alla llegado (x == cabecera clicleada)
  modal.orderByMeProductos = function(x) {
    //if terniario: propertyName es igual a x, si pasa cambia el valor de reverseProductos a true/false, si no propertyName queda igual a x que es el elemento clicleado
    //esto se hace para cuadrar el desc/asc
    modal.reverseProductos = (modal.propertyName === x) ? !modal.reverseProductos : modal.propertyName = x;
    //ordena los productos segun x
    modal.myOrderByProductos = x;
  }

  //obtiene un customer por id
  modal.mostrarDetallesCliente = function (id) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$filter=CustomerID eq '"+id+"'&$format=json")
    .then(function(response) {
      //obtiene el customer
      modal.tablas.clientes.uno = response.data.value;
      //inicia y abre el modal
      var modalInstance = $uibModal.open({
        animation: true,
        //cerrar solo con botones ok cancel
        backdrop : 'static',
        //quita la accion de salir por teclado esc
        keyboard :false,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'views/modal/modalCliente.html',
        controller: 'ModalCtrlCliente',
        controllerAs: 'modal',
        size: 'lg',
        resolve: {
          data: function () {
            return [modal.tablas.clientes.cabecera, modal.tablas.clientes.uno];
          }
        }
      });

    });
  }

  modal.editarCliente = function (id) {
    alert("escucho pa editar "+id);
  }

  modal.elimininarCliente = function (id) {
    
    if (confirm("Seguro desea eliminar id: "+id)) {
      alert("escucho pa eliminar "+id);
    }else{
      alert("Cancelada la operacion");
    }
    
  }

  //ordena los clientes de desc/asc segun la x que le alla llegado (x == cabecera clicleada)
  modal.orderByMeClientes = function(x) {
    //if terniario: propertyName es igual a x, si pasa cambia el valor de reverseClientes a true/false, si no propertyName queda igual a x que es el elemento clicleado
    //esto se hace para cuadrar el desc/asc
    modal.reverseClientes = (modal.propertyName === x) ? !modal.reverseClientes : modal.propertyName = x;
    //ordena los productos segun x
    modal.myOrderByClientes = x;
  }

});

//controlador del modal del producto
app.controller('ModalCtrlProducto', function ($uibModalInstance, data) {
  var modal = this;

  modal.productos = data;
  
  modal.ok = function () {
    
    $uibModalInstance.close();
  };

  modal.cancel = function () {
     
    $uibModalInstance.dismiss('cancel');
  };
});

//controlador del modal del customer
app.controller('ModalCtrlCliente', function ($uibModalInstance, data) {
  var modal = this;

  modal.clientes = data;
  
  modal.ok = function () {
    
    $uibModalInstance.close();
  };

  modal.cancel = function () {
    
    $uibModalInstance.dismiss('cancel');
  };
});
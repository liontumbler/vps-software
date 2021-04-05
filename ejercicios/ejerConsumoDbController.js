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

  //optiene todos los productos
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$format=json")
  .then(function(response) {
    modal.tablas.productos.todos = response.data.value;
  });

  //optiene todos los customers
  $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$format=json")
  .then(function(response) {
    modal.tablas.clientes.todos = response.data.value;
  });

  //optiene un producto por id
  modal.mostrarDetallesProducto = function (id) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Products?$filter=ProductID eq "+id+"&$format=json")
    .then(function(response) {
      //optiene el producto
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
        templateUrl: 'modalProducto.html',
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

  modal.emininarProducto = function (id) {

    if (confirm("Seguro desea eliminar id: "+id)) {

      /*$http.delete("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$filter=CustomerID eq '"+id+"'&$format=json")
      .then(function(response) {
        
        alert(response);
        
      });*/
    
    }else{
      alert("Cancelada la operacion");
    }

  }

  modal.orderByMeProductos = function(x) {
    modal.reverseProductos = (modal.propertyName === x) ? !modal.reverseProductos : modal.propertyName = x;
    modal.myOrderByProductos = x;
  }

  //optiene un customer por id
  modal.mostrarDetallesCliente = function (id) {
    $http.get("https://services.odata.org/V3/Northwind/Northwind.svc/Customers?$filter=CustomerID eq '"+id+"'&$format=json")
    .then(function(response) {
      //optiene el customer
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
        templateUrl: 'modalCliente.html',
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

  modal.emininarCliente = function (id) {
    
    if (confirm("Seguro desea eliminar id: "+id)) {
      alert("escucho pa eliminar "+id);
    }else{
      alert("Cancelada la operacion");
    }
    
  }

  modal.orderByMeClientes = function(x) {
    modal.reverseClientes = (modal.propertyName === x) ? !modal.reverseClientes : modal.propertyName = x;
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
//creamos un módulo de angular para los controladores y le decimos que es un array
var wusickControllers = angular.module('wusickControllers', []);

//loginController
wusickControllers.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.userData = {};
        //definimos la funcion
		$scope.login = function(){
        //le indicamos que hará una peticioón get a la funcion indicada y los datos que le pasamos
        $http.post('/api/login', $scope.userData)
        //definimos las acciones para cada respuesta, si es satisfactoria
            .success(function(data) {
            //y los datos null, es decir no existe cierto usuario  
                if(data==='null'){
                     console.log(data);
                    alert("Usuario o contraseña incorrectos");
                }
                else{
                     console.log(data);
                    alert("OK");
                    ;
                }

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);


//register controler
wusickControllers.controller('registerCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.userData = {};
        //definimos la funcion
        $scope.register = function(){
        //le indicamos que hará una peticioón get a la funcion indicada y los datos que le pasamos
        $http.post('/api/register', $scope.userData)
        //definimos las acciones para cada respuesta, si es satisfactoria
            .success(function(data) {
            //y los datos null, es decir no existe cierto usuario  
                if(data==='null'){
                     console.log(data);
                    alert("Usuario o contraseña incorrectos");
                }
                else{
                     console.log(data);
                    alert("OK");
                    ;
                }

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);
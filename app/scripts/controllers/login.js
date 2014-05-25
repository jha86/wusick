var wusickControllers = angular.module('wusickControllers', []);

//loginController
wusickControllers.controller('loginCtrl', ['$scope', '$http', function ($scope, $http) {
		$scope.userData = {};
		$scope.login = function(){
            //Las peticiones desde el controlador indican la ruta a la base de datos.
        $http.post('/api/login', $scope.userData)
            .success(function(data) {  
                if(data==='null'){
                     console.log(data);
                    alert("Usuario o contraseña incorrectos");
                }
                else{
                     console.log(data);
                    alert("OK");
                }

            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}]);
'use strict';

angular.module('wusickApp')
  .controller('MessageCtrl', function ($scope, $http) {
    $http.get('/api/message').success(function(message) {
      $scope.message = message;
    });
  });

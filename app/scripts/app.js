'use strict';

angular.module('wusickApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'wusickControllers'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/message', {
        templateUrl: 'partials/message',
        controller: 'MessageCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'loginCtrl'
      })
      .when('/register', {
        templateUrl: 'partials/register',
        controller: 'registerCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });
'use strict';

angular
  .module('myccApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/quienes-somos', {
        templateUrl: 'views/somos.html'
      })
      .when('/productos', {
        templateUrl: 'views/productos.html'
      })
      .when('/noticias', {
        templateUrl: 'views/noticias.html'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

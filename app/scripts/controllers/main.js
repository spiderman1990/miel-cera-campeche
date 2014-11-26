'use strict';

angular.module('myccApp')
  .controller('MainCtrl', function ($scope) {

    $scope.menuitems = [
      {item : 'Inicio', url : '#/inicio' },
      {item : '¿Quiénes somos?', url : '#/quienes-somos'},
      {item : 'Productos', url : '#/productos'},
      {item : 'Noticias', url : '#/noticias'},
      {item : 'Contacto', url : '#/contacto'}
    ];

    $scope.active = 0;

    $scope.select = function(index) {
      $scope.active = index;
    }


  });

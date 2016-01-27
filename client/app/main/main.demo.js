'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mas/client/demo.html', {
        templateUrl: 'mas/client/app/main/main.html',
        controller: 'MainCtrl'
      });
  });
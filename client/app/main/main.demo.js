'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'mas/client/app/main/main.html',
        controller: 'MainCtrl'
      });
  });
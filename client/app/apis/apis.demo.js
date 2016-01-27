'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mas/client/apis/', {
        templateUrl: 'app/apis/apis.html',
        controller: 'ApisCtrl'
      });
  });

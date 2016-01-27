'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/apis/', {
        templateUrl: 'app/apis/apis.html',
        controller: 'ApisCtrl'
      });
  });

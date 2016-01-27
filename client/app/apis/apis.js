'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/apis/', {
        templateUrl: 'mas/client/app/apis/apis.html',
        controller: 'ApisCtrl'
      });
  });

'use strict';

angular.module('masApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/detail/:id/', {
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailCtrl'
      });
  });

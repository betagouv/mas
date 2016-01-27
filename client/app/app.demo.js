'use strict';

angular.module('masApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/mas/client/demo.html'
      });

    $locationProvider.html5Mode(true);
  });

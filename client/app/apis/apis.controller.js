'use strict';

angular.module('masApp')
  .controller('ApisCtrl', function ($scope, $http, $location, apis) {
    $scope.title = "Magasin d'API et de Services";
    $scope.apis = {};
    
    $scope.query = "";

	$scope.helper = apis.getSearchHelper();

    $scope.helper.on('result', function(content) {
      $scope.$apply(function() {
        $scope.apis = content;
      });
    });

    if ($location.search().q != undefined) {
      console.log("search with full text search");
      $scope.search($location.search().q);
    }
    else {
      $scope.helper.search();
    }
    

  });

// frontend/app/controllers/home.controller.js
angular.module('homeFoodApp')
  .controller('HomeController', ['$scope', 'ApiService', function($scope, ApiService) {
    $scope.welcomeMessage = 'Delicious Homemade Food Delivered to You!';
    
    // Load Menu from backend
    ApiService.getMenu().then(function(response) {
      $scope.menuItems = response.data;
    });
  }]);


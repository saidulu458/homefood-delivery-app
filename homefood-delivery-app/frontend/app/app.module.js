// frontend/app/app.module.js
angular.module('homeFoodApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'HomeController'
      })
      .otherwise({ redirectTo: '/' });
  }]);


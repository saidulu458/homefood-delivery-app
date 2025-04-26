// frontend/app/services/api.service.js
angular.module('homeFoodApp')
  .factory('ApiService', ['$http', function($http) {
    var baseUrl = 'http://localhost:8080/api'; // backend base URL

    return {
      getMenu: function() {
        return $http.get(baseUrl + '/menu');
      },
      placeOrder: function(order) {
        return $http.post(baseUrl + '/orders', order);
      }
    };
  }]);

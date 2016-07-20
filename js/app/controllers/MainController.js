function MainController($scope) {
  $scope.name = 'Jason';
  $scope.email = 'jasonpaulsouthwell@me.com';
  $scope.phone = '415.961.9350'
}
angular
  .module('app')
  .controller('MainController', MainController);
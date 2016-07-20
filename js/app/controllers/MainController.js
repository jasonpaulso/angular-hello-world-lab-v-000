function MainController($scope) {
  $scope.contact = {
    name: 'Jason Southwell',
    email:'jason@email.com',
    phone: '415.555.5555' }
}

angular
  .module('app', [])
  .controller('MainController', MainController);
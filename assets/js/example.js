angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('ProgressDemoCtrl', function ($scope) {
  $scope.max = 200;
  $scope.randomStacked = function() {
    $scope.stacked = [];
    var types = ['danger'];
  };
});
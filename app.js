(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckFunction);

  LunchCheckFunction.$inject = ["$scope"];

  function LunchCheckFunction($scope) {
    $scope.name = "Bane";
  }
})();

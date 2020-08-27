(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckFunction);

  LunchCheckFunction.$inject = ["$scope", "$filter"];

  function LunchCheckFunction($scope) {
    $scope.nameString = "";
    $scope.yourMessage = "";

    $scope.checkTheFood = function () {
      var count = $scope.nameString.split(",").length;

      if (count <= 3) {
        $scope.yourMessage = "Enjoy!";
      } else {
        $scope.yourMessage = "Too much!";
      }
    };
  }
})();

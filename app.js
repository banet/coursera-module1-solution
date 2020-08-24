(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckFunction);

  LunchCheckFunction.$inject = ["$scope"];

  function LunchCheckFunction($scope) {
    //TEST
    // $scope.count = 0;
    // $scope.myCheck = function () {
    //   $scope.count++;
    // };
    $scope.string = "";
    $scope.words = string.split("");
    $scope.words = string.split("");

    $scope.checkTheFood = function () {
      // Test clicking method
      $scope.string = "Bane";
      if ($scope.string === "") {
        return "Empty";
      }
    };

    $scope.sayMsg = function () {
      // if ($scope.message > 3) {
      //   return "Enjoy";
      // }
      return "Enjoy!";
    };
  }
})();

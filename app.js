(function () {
  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckFunction);

  LunchCheckFunction.$inject = [("$scope", "$filter")];

  function LunchCheckFunction($scope, $filter) {
    //TEST0
    // $scope.count = 0;
    // $scope.myCheck = function () {
    //   $scope.count++;
    // };

    $scope.checkTheFood = function () {
      // Test clicking method
      $scope.nameString = {};
      // $scope.isObjectEmpty = function (nameString) {
      //   return Object.keys(nameString).length === 0;
      // };
      $scope.nameString = {};
      return Object.keys(nameString).length;
    };

    $scope.sayMsg = function () {
      var result = isObjectEmpty();
      return result;
    };
  }
})();

/**
 * The idea of this assignment is to create a front-end application that presents the user with a textbox where they can list comma-separated items they usually eat for lunch. Once that's entered, the user has to click the "Check If Too Much" button.

If the number of items in the textbox is less than or equal to 3 (e.g., 1, 2, or 3), a message should show up under to the textbox saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above), the message "Too much!" should show up under the textbox. (*Hint:* To implement this behavior you can utilize the `split` method. [See documentation for that method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split))

If the textbox is empty and the user clicks the "Check If Too Much" button, the message "Please enter data first" should show up. 'Empty' here means either `""` (empty string) or a string with just spaces in it. (Hint: AngularJS `ng-model` already performs the trimming for you, so there shouldn't be anything you need to do.)

Only 1 message should be shown at any given time. In other words, if you have both messages "Enjoy!" and "Too much!" showing up at the same time, it's an error.
 */

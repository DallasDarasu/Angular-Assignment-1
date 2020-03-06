(function () {
    'use strict';
    angular.module('Assignment', [])

        .controller('foodChecker', function ($scope) {
            $scope.result = "";
            $scope.itens = "";
            $scope.getResult = function () {
                if ($scope.itens != "") {
                    var numberOfItens = $scope.itens.split(',').length
                    $scope.result = numberOfItens > 3 ? "Too much!" : "Enjoy!"
                }
                else {
                    $scope.result = "Please enter data first"
                }
            }
        });

})();
var app = angular.module('szalekApp', []);

app

    .controller("NameCtrl", function ($scope) {
        $scope.hello = "Welcome welcome!";
    })

    .controller("NameCtrl2", function ($scope) {
        $scope.hello = "Welcome welcome! 2";
    })

    .directive('btbwMenu', function () {
        return {
            controller: function ($scope, $http) {
                $http.get('menu.json').success(function (data) {
                    $scope.menu = data;
                    $scope.submenu = data[0].sub;
                });
                $scope.changeSub = function (menuId) {
                    $scope.submenu = $scope.menu[menuId].sub;
                }
            },
            restrict: 'E',
            templateUrl: 'tpl/menu.tpl.html'
        };
    });
;

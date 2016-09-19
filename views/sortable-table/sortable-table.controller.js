//<reference path index.html />

(function() {
    'use strict';

    angular.module('sortable-table')
        .config(configRouting)
        .controller('SortableTableController', SortableTableController);

    SortableTableController.$inject = ['$scope', 'StringService'];
    function SortableTableController($scope, StringService) {
        var sortableTable = this;

        activate();

        function activate(){
            getFoodArray();
        }

        $scope.foodGroups = ["fruit", "vegetable", "meat", "dairy", "grain", "caffeine"];

        $scope.name = {asc: true};
        $scope.type = {asc: true};
        $scope.price = {asc: true};
        $scope.unit = {asc: true};
        $scope.stock = {asc: true};
        $scope.need = {asc: true};

        // /start
        $scope.keys = [
            {first: "name", second: "Name"},
            {first: "type", second: "Food Group"},
            {first: "price", second: "Price Per Unit"},
            {first: "unit", second: "Unit"},
            {first: "stock", second: "In Stock"},
            {first: "need", second: "Amount to Purchase"}

        ];
        // /end

        $scope.predicate = "type";

        function getFoodArray() {
            sortableTable.foodArray = StringService.getFoodArray();
        }

        $scope.order = function(predicate) {
            $scope.predicate = predicate;
        };

        $scope.sortByHeader = function(headerName) {
            switch (headerName) {
                case "name":
                    $scope.name.asc = !$scope.name.asc;
                    break;
                case "type":
                    $scope.type.asc = !$scope.type.asc;
                    break;
                case "price":
                    $scope.price.asc = !$scope.price.asc;
                    break;
                case "unit":
                    $scope.unit.asc = !$scope.unit.asc;
                    break;
                case "stock":
                    $scope.stock.asc = !$scope.stock.asc;
                    break;
                case "need":
                    $scope.need.asc = !$scope.need.asc;
                    break;
            }
            $scope.order(headerName);
        };
    }

    function configRouting($stateProvider) {
        $stateProvider
            .state('sortable-table', {
                url: '/sortable-table',
                templateUrl: '../views/sortable-table/sortable-table.html',
                controller: 'SortableTableController as sortableTable'
            });
    }
})();

//<reference path index.html />
(function() {
    'use strict';

    angular.module('sortable-table')
        .config(configRouting)
        .controller('SortableTableController', SortableTableController);

    SortableTableController.$inject = ['$scope', 'StringService'];
    function SortableTableController($scope, StringService) {
        var sortableTable = this;

        // variables
        $scope.reverse = false;

        // Functions available to HTML
        sortableTable.sortByHeader = sortByHeader;

        activate();

        function activate(){
            getFoodArray();
        }

        // /start
        sortableTable.keys = [
            {first: "name", second: "Name", asc: true},
            {first: "type", second: "Food Group", asc: true},
            {first: "price", second: "Price Per Unit", asc: true},
            {first: "unit", second: "Unit", asc: true},
            {first: "stock", second: "In Stock", asc: true},
            {first: "need", second: "Amount to Purchase", asc: true}
        ];
        // /end

        $scope.predicate = "type";

        function getFoodArray() {
            sortableTable.foodArray = StringService.getFoodArray();
        }

        function order(predicate) {
            $scope.predicate = predicate;
            $scope.reverse = !$scope.reverse; // toggles the order in which orderBy
        }

        function sortByHeader(key) { // key = {first: "name", second: "Name", asc: true}
            console.log("here");
            key.asc = !key.asc; // toggle arrow
            order(key.first);
        }
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

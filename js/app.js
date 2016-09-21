/**
 * App.js initial setup. Routing was moved inside controllers.
 */
(function () {
    'use strict';

    angular.module('sortable-table', [
        'ui.router'
    ])
    .controller('ApplicationController', ApplicationController);

    //An App controller that changes some of the bounded data in the view if they are not set.
    ApplicationController.$inject = ['$scope'];
    function ApplicationController($scope) {
        var app = this;

        $scope.$on('$stateChangeSuccess', onStateChangeSuccess);

        function onStateChangeSuccess(event, toState, toParams, fromState, fromParams) {

        }
    }
})();

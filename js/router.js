(function () {
    'use strict';

    angular.module('sortable-table')
        .config(config);

    function config($urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/sortable-table');
    }

})();

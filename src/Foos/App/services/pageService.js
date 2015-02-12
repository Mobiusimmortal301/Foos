﻿app.service('pageService', [function() {
    this.getPages = function($scope, items, itemsPerPage) {
        var pages = {
            currentPage: 1,
            totalItems: items.length,
            itemsPerPage: itemsPerPage,
            pageCount: Math.ceil(items.length / itemsPerPage),
            doShow: items.length > itemsPerPage,
            menuSize: 7
        };
        
        $scope.$watch('pages.currentPage + pages.itemsPerPage', function () {
            var begin = ((pages.currentPage - 1) * pages.itemsPerPage);
            var end = begin + pages.itemsPerPage;
            pages.items = items.slice(begin, end);
        });

        return pages;
    }
}]);
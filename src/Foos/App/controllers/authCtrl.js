﻿app.controller('AuthCtrl', ['$rootScope', '$scope', 'authService', function($rootScope, $scope, authService) {
    var authSuccess = function (data, status, headers, config) {
        if (status == 200) {
            authService.user.name = data.userName;
            authService.user.userId = data.userId;
            authService.user.sessionId = data.sessionId;
            authService.user.isAuthenticated = true;
            $scope.$close(data);
            $rootScope.$broadcast('alert', { type: 'success', msg: 'Welcome, ' + data.userName });
        } else {
            authError(data, status, headers, config);
        }
    };

    var authError = function (data, status, headers, config) {
        authService.user.name = undefined;
        authService.user.isAuthenticated = false;
        if (data.responseStatus)
            $rootScope.$broadcast('alert', { type: 'warning', msg: 'Woops! ' + data.responseStatus.message });
        else
            $rootScope.$broadcast('alert', { type: 'warning', msg: 'Server error, please try again later.' });
    };
    
    $scope.register = function (name, pass, email) {
        authService.register(name, pass, email, authSuccess, authError);
    };

    $scope.signin = function(name, pass) {
        authService.signin(name, pass, authSuccess, authError);
    };

    $scope.cancel = $scope.$dismiss;
}]);
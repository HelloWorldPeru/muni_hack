'use strict';

angular.module('myAppAngularApp')
  .directive('loader', function ($timeout) {
    return {
      templateUrl: 'views/loader.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      }
    };
  });

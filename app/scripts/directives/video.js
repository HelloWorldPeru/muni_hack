angular.module('myAppAngularApp')
  .directive('videoFrame', function () {
    return {
      scope: {
      	'video': '&'
      },
      template: "{{video}}",
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      	debugger
      
      }
    };
  });

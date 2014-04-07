'use strict';

angular
  .module('myAppAngularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngSocial'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/acerca', {
        templateUrl: 'views/acerca.html'
      })
      .when('/ayuda', {
        templateUrl: 'views/ayuda.html'
      })
      .when('/inicio', {
        templateUrl: 'views/inicio.html',
        controller: 'InicioCtrl'
      })
      .when('/perfil', {
        templateUrl: 'views/perfil.html'
      })
      .when('/configuracion', {
        templateUrl: 'views/configuracion.html'
      })
      .when('/mapa', {
        templateUrl: 'views/mapa.html',
        controller: 'MapaCtrl'
      })
      .when('/registra', {
        templateUrl: 'views/registra.html'
      })
      .when('/califica', {
        templateUrl: 'views/califica.html'
      })
      .otherwise({
        redirectTo: '/'
      });
      //$locationProvider.html5Mode(true);
  });

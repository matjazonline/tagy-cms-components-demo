'use strict';

angular
  .module('tagyCmsComponentsDemoApp', [
    'ngRoute',
    'tagyComponents',
        'ui.tinymce',
        'ui.ace'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/iframe.html',
            controller: 'IframeCtrl'
        }).when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) .when('/gallery', {
        templateUrl: 'views/gallery-0.html',
        controller: 'MainCtrl'
      }) .when('/gallery-of-components', {
        templateUrl: 'views/gallery-1.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($rootScope,$timeout,EditHtmlService , CrossFrameConnection ){
        EditHtmlService.setIframeAppJSFilePath("/bower-tagy-components-iframe-app/scripts/scripts.js")
        //EditHtmlService.setIframeAppExtraModules([{module:'emailListIntegration',src:'scripts/directives/email-list-integration-selector.js'}])
        $(document).foundation();
    })

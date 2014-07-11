'use strict';

angular.module('tagyCmsComponentsDemoApp')
  .controller('NavCtrl', function ($scope) {
    $scope.reload=function(path){
            window.location.href='/?r='+Math.random()+'#'+path
        }
  });

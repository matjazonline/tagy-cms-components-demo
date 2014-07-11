'use strict';

angular.module('tagyCmsComponentsDemoApp')
  .controller('MainCtrl', function ($scope,EditableMessageChannel) {
        $scope.selectImage=function(path){
            EditableMessageChannel.dispatchSelectedImagePath(path)
        }

    });

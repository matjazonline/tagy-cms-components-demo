'use strict';

angular.module('tagyCmsComponentsDemoApp')
  .directive('columnResize', function ($window,$timeout) {
    return {
      // quick fix for Foundation framework fixed column,
      restrict: 'C',
      link: function postLink(scope, element, attrs) {

          element.css({
              position: 'fixed',
              overflow: 'scroll',
              height: '100%'
          })

          var resColumns=function(){
              var $lCol=element
              var rCol=$($lCol.next())
              var parW=$lCol.parent().width()
              $lCol.outerWidth(parW-rCol.outerWidth())
          }

          $($window).resize(resColumns)

          $timeout(function(   ){
              resColumns()

          },0)
      }
    };
  });

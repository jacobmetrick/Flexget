(function () {
    'use strict';

    angular.module('flexget.directives')
        .controller('materialPaginationController', materialPaginationController);

      function materialPaginationController($scope) {
        var vm = this;

        vm.goto = function(index) {
          console.log(index);
          $scope.gotoPage({ index: index});
          //$scope.gotoPage(index);
          //vm.currentPage = vm.page[index];
        };

    /*vm.getoPre = function(){
      $scope.currentPage = vm.index;
      vm.index -= vm.step;
    };

    vm.getoNext = function(){
      vm.index += vm.step;
      $scope.currentPage = vm.index + 1;
    };

      vm.gotoFirst = function(){
        vm.index = 0;
        $scope.currentPage = 1;
      };

    vm.gotoLast = function(){
      vm.index = parseInt($scope.totalPages / vm.step) * vm.step;
      vm.index === $scope.totalPages ? vm.index = vm.index - vm.step : '';
      $scope.currentPage = $scope.totalPages;
    };*/

    /*$scope.$watch('vm.currentPage', function(newValue, oldValue) {
      console.log(newValue, oldValue);
     // $scope.gotoPage();
    });*/

     $scope.$watch('totalPages', function(newValue) {
      if(newValue) {
        vm.init();
      }
    });

    vm.init = function() {
      vm.totalPages = $scope.totalPages;
      vm.step = $scope.step;
      vm.currentPage = $scope.currentPage;
      vm.index = 0;

      vm.stepInfo = (function() {
        var i, result = [];

        var lowest = Math.min(vm.step, vm.totalPages)

        for (i = 0; i < lowest; i++) {
          result.push(i)
        }
        return result;
      })();


      vm.page = (function() {
        var i, result = [];
        for (i = 1; i <= vm.totalPages; i++) {
          result.push(i);
        }
        return result;
      })();
    };
  }
})();
(function(){
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    function LunchCheckController($scope){
        
        $scope.LetsCheck = function (){
            
          // var $arr = $scope.menu.split(',');
           if ((!$scope.menu) || $scope.menu == ' ')
           {
               $scope.result = "Please enter data first";
           }
           else {
               var str = $scope.menu;
               var arr = str.split(',');
               if (arr.length > 3){
                   $scope.result = "You eat too much";
               }
               else {
                   $scope.result = "Enjoy!";
               }
              // $scope.result = arr.length;
           }
        };

    };
})();

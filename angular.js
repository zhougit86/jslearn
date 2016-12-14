/**
 * Created by Administrator on 2016-10-16.
 */
var app = angular.module('scopeExample', [])

app.factory('Data',function(){
   return {message:"test"}
});

app.filter('reverse',function(Data){
    return function (text){
        return text.split("").reverse().join("") + Data.message;
    }
});

app.controller('test1', ['$scope','Data', function($scope,Data) {
        $scope.data = Data;
    }]);

app.controller('test2', ['$scope','Data', function($scope,Data) {
    $scope.data = Data;

    $scope.reverseMess = function(msg){
        return msg.split("").reverse().join("")
    }
}]);
/**
 * Created by Administrator on 2016-10-16.
 */
var app = angular.module('scopeExample', [])

//lesson 1--------------------------
//app.factory('Data',function(){
//   return {message:"test"}
//});
//
//app.filter('reverse',function(Data){
//    return function (text){
//        return text.split("").reverse().join("") + Data.message;
//    }
//});
//
//app.controller('test1', ['$scope','Data', function($scope,Data) {
//        $scope.data = Data;
//    }]);
//
//app.controller('test2', ['$scope','Data', function($scope,Data) {
//    $scope.data = Data;
//
//    $scope.reverseMess = function(msg){
//        return msg.split("").reverse().join("")
//    }
//}]);

//lesson 8-------------------------------------------------
//
//app.factory('Avenger',function(){
//    var Avenger = {};
//    Avenger.cast=[{'name':1},{'name':2},{'name':3},{'name':4}];
//    return Avenger;
//});
//
//app.controller('avgctl',['$scope','Avenger',function($scope,Avenger){
//    $scope.aaa = Avenger;
//}]);

//lesson10-------------------------------------
//app.directive("super",function(){
//    return{
//        restrict:"A",
//        template:"<div>Here I am</div>",
//        link: function(){
//            alert('this is a worker');
//        }
//    }
//});
//
//app.directive("flash",function(){
//    return{
//        restrict:"A",
//        link: function(){
//            alert('this is a faster');
//        }
//    }
//});
//A for direct,C for class,M for comment, E for element

//lesson 12 ----------------------

app.directive("enter",function(){
    return function (scope,element){
        element.bind("mouseenter",function(){
            console.log("entering")
        })
    }
});

app.directive("leave",function(){
    return function (scope,element){
        element.bind("mouseleave",function(){
            console.log("leaving")
        })
    }
});
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

//app.directive("enter",function(){
//    return function (scope,element){
//        element.bind("mouseenter",function(){
//            //console.log("entering")
//            element.addClass("effect");
//        })
//    }
//});
//
//app.directive("leave",function(){
//    return function (scope,element){
//        element.bind("mouseleave",function(){
//            //console.log("leaving")
//            element.removeClass("effect");
//        })
//    }
//});


//lesson14~15-----------------------------------------

//app.controller('AppCtrl', ['$scope', function($scope) {
//        $scope.loadMoreTwit = function () {
//            alert("Load the twit");
//        }
//    }]);
//
//app.directive("enter",function(){
//    return function (scope,element,attrs){
//        element.bind("mouseenter",function(){
//            //console.log("entering")
//            scope.$apply(attrs.enter)
//        })
//    }
//});


//app.directive("superhero",function(){
//    return{
//        restrict:"E",
//        scope:{},
//
//        controller:function($scope){
//            $scope.abilities=[];
//
//            this.addStr = function(){
//                $scope.abilities.push("str")
//            };
//
//            this.addSpd = function(){
//                $scope.abilities.push("spd")
//            };
//
//            this.addFlt = function(){
//                $scope.abilities.push("flt")
//            };
//        },
//        link: function(scope,element){
//            element.addClass('effect');
//            element.bind("mouseenter",function(){
//                console.log(scope.abilities);
//            })
//        }
//    }
//});
//
//app.directive("strength",function(){
//    return{
//        require:"superhero",
//        link: function(scope,element,attrs,superheroCtrl){
//            superheroCtrl.addStr();
//        }
//    }
//});
//
//app.directive("speed",function(){
//    return{
//        require:"superhero",
//        link: function(scope,element,attrs,superheroCtrl){
//            superheroCtrl.addSpd();
//        }
//    }
//});
//
//app.directive("flight",function(){
//    return{
//        require:"superhero",
//        link: function(scope,element,attrs,superheroCtrl){
//            superheroCtrl.addFlt();
//        }
//    }
//});

//lesson16-----------------------------

//app.controller("chorectrl",function($scope){
//    $scope.logChore = function(chore){
//        alert(chore);
//    }
//});
//
//app.directive("kid",function(){
//    return{
//        restrict:"E",
//        scope:{
//            done:"&"
//        },
//        template:"<input type='text' ng-model='chore'> " +
//        "{{chore}}" +
//        "<div class='effect' ng-click='done({chore:chore})'>submit</div>"
//    }
//});

//lesson17--------------------------------
app.controller("AppCtrl",function($scope){
    $scope.ctrlFlavor="blank"
});

app.directive("drink",function(){
    return{
        scope:{
            flavor:"@"
        },
        template:"<div>{{flavor}}</div>"
        //link:function(scope,element,attrs){
        //    scope.flavor = attrs.flavor;
        //}
    }
});
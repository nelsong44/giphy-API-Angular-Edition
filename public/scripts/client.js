console.log('JS linked');
// angular module app
var giphyApp = angular.module('giphyApp', []);

giphyApp.controller('GiphyController', function($http) { //$http bullt-in- have to pass in as parameter to use
  console.log('NG linked');
  var vm = this; //references our GiphyController
  // vm.baseFunction = function() {
  //   console.log('in baseFunction');
  //   $http({
  //     method: 'GET',
  //     url: '/giphy'
  //   }).then(function(response) {
  //     console.log('back with', response); // the giphy array as an object
  //   }); //end get

  vm.randomGiphy = function() {
    console.log('randomGiphy');
  }; // end randomGiphy

}); //end baseFunction

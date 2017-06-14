console.log('JS linked');
// angular module app
var giphyApp = angular.module('giphyApp', []);

giphyApp.controller('GiphyController', function($http) { //$http bullt-in- have to pass in as parameter to use
    console.log('NG linked');
    var vm = this; //references our GiphyController
    vm.gifArray = [];
    vm.searchKeyword = function() {
      console.log('called searchKeyword()');
      $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=' +  vm.input + '&api_key=dc6zaTOxFJmzC'
      }).then(function(response) {
        console.log('back with', response); //gif as object-array of 25 objects matching keyword search //response.data[i].url
        vm.gifArray.push(response.data[i].url);
      }); //end get
    //empty input field after button click
    searchKeyword = '';
  }; // end searchKeyword

  vm.randomGiphy = function() {
    console.log('randomGiphy');
  }; // end randomGiphy

}); //end baseFunction

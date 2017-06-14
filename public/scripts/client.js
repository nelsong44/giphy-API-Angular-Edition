console.log('JS linked');
// angular module app
var giphyApp = angular.module('giphyApp', []);

giphyApp.controller('GiphyController', function($http) { //$http bullt-in- have to pass in as parameter to use
    console.log('NG linked');
    var vm = this; //references our GiphyController
    vm.gifArray = [];
    // function to retrieve gifs from giphy API based on user-input to display on DOM
    vm.searchKeyword = function() {
      console.log('called searchKeyword()');
      $http({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search?q=' +  vm.input + '&api_key=dc6zaTOxFJmzC'
      }).then(function(response) {
        console.log('back with', response); //gif as object-array of 25 objects matching keyword search //response.data[i].url
        console.log(response.data.data[0].images.downsized.url);
        vm.search = response.data.data;
        console.log(vm.search);
      }); //end get
  }; // end searchKeyword

  vm.randomGiphy = function() {
    $http({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search?q=' +  vm.input + '&api_key=dc6zaTOxFJmzC'
    }).then(function(response) {
      console.log('back with', response);

      vm.random = response.data.data;
      console.log(vm.search);
    }); // end then
  }; // end randomGiphy

}); //end controller

'use strict';


var app = angular.module('app', ['ngResource'])

// Make sure AngularJS calls our WCF Service as a "GET", rather than as an "OPTION"
app.config(['$httpProvider', function ($httpProvider) {
    // $httpProvider.defaults.headers.common = {};
    // $httpProvider.defaults.headers.post = {};
    // $httpProvider.defaults.headers.put = {};
    // $httpProvider.defaults.headers.patch = {};
    // //$httpProvider.defaults.useXDomain = true;
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //$httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
    //$httpProvider.defaults.headers.common['Authorization'] = 'Basic YWxtOnR0MTIzNA==';
    //$httpProvider.defaults.headers.common['Upgrade-Insecure-Requests'] = '1';
}]);

app.factory('Entry', function($resource) {
  return $resource('http://localhost:3000/entries/:id'); // Note the full endpoint address
});

app.controller('ResourceController',function($scope, Entry) {
  var entry = Entry.get({ id: 1 }, function() {
    console.log(entry);
  }); // get() returns a single entry

  var entries = Entry.query(function() {
    console.log(entries);
  }); //query() returns all the entries

  //$scope.entry = new Notes(); //You can instantiate resource class

  //$scope.entry.data = 'some data';

  //Entry.save($scope.entry, function() {
    //data saved. do something here.
  //}); //saves an entry. Assuming $scope.entry is the Entry object

});

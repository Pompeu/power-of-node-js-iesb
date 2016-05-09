(function() {
  'use strict';

  angular.module('app')
    .factory('login', login);

  login.$inject = ['$http'];

  function login ($http) {

    const service = {
      logar : login
    };

    const loginMock = {
      'err': null,
      'result': {
        'id_token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImlhQG5ldC5jb20iLCJuYW1lIjoiTGltcCIsImRhdGVDYWRhc3RybyI6MTQzOTQ1MTQ4ODkyMywic25hbWUiOiJEb2RpIiwiaWQiOjQsImlhdCI6MTQ2MjYxNzcyMCwiZXhwIjoxNDYyNjE4MDIwfQ.tvzsbko3taLN0U8YeAHtqtzAeU4Ay5x062GikWF7v5c'
      },
      'status': true
    };

    return service;
      /*
    fazendo login entre o cliente desktop e a rede de conhecimentos
    */
    function login (user) {
      return loginMock;
        /*
      * const url = 'http://redeconhecimentos.herokuapp.com/api/login';
      * $http.post(url, user).then(function success (data) {
      return data.data;
      }, function error (err) {
      return err;
      });*/
    }
  }
})();

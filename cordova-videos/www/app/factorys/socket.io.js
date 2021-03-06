(function () {
  'use strict';

  angular.module('app')
    .factory('socket', socket);

  socket.$inject =['$rootScope'];

  function socket ($rootScope) {
    /*
  io recebe o endereco do servidor de websocktes como parametro
  a partir daki ele  pode emitir e escutar eventos
  para tomar ações devidas.
  essa factory fabrica um objeto que possbilida
  a comunicação entre o cliente e o servidor
  */
    var socket = io("http://100.65.101.143:1337/");

    var service = {
      on : on,
      emit : emit
    };

    return service;
    //essa função funciona como um listener entre cliente e o servidor
    function on (ev, cb) {
      socket.on(ev, function() {
        var msg = arguments;
        $rootScope.$apply(function () {
          cb.apply(socket, msg);
        });
      });
    }
    //essa função emite os eventos para servidor
    function emit (ev, data, cb) {
      socket.emit(ev, data, function (msg) {
        $rootScope.$apply(function () {
          if(cb){
            cb.apply(socket,msg);
          }
        });
      });
    }
  }
}());

(function() {
  'use strict';
  angular.module('app')
    .directive('comentsDir', comentsDir);

  function comentsDir () {
    var directive = {
      templateUrl : "./app/directives/coments/coments.html",
      restrict : "E",
      controller : ComentController,
      controllerAs : "cm",
    };

    return directive;
  }

  ComentController.$inject = ['$window', 'jwtHelper','socket'];

  function ComentController ($window, jwtHelper, socket) {
    var cm = this;
    var token = $window.localStorage.getItem("token");
    var user = jwtHelper.decodeToken(token);
    cm.coments = [];
    cm.coment = '';
      /* 
    metodo socket on escuta um evento chamado 'send:message'
    sempre que existe um evento novo ele pega o argument
    que e um msg, e empilha na lista de comenetaios
    */
    socket.on("send:message", function (msg)  {
      cm.coments.push(msg);
    });
    /*
  a função addComent emit um evento para servidor de websocktes
  "send:message", passando o nome do usuario logado e o comentario,
  esse evento sera emitido a todos usuario logado pelo servidor.
  */
    cm.addComent = function () {
      if (cm.coment.length >= 3 && cm.coment.length <= 20){
        socket.emit("send:message", {
          user : user.name,
          coment : cm.coment
        });
        cm.coment = '';
      }
    };
  }
})();

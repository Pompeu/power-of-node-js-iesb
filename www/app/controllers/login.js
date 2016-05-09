(function () {
  'use strict';
  angular.module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['login','$window', '$timeout'];

  function MainCtrl (login, $window, $timeout) {
    var vm = this;
    vm.trylogin = !!$window.localStorage.getItem("token");
    vm.progress = false;
    vm.msg = null;

    vm.login = function () {
      vm.progress = true;
      $timeout(function(){
        var result = login.logar({});
        $window.localStorage.setItem("token",JSON.stringify(result.result.id_token));
        vm.trylogin = true;
        vm.msg = null;
        vm.trylogin = true;
      }, 1000);
      /*login.logar(user).then(loginSucess, loginFail)
    .catch(e => {
    alert(e);
    });*/
    }

    var loginSucess = function () {
      vm.trylogin = true;
      if(result.status) {
        $window.localStorage.setItem("token",JSON.stringify(result.result.id_token));
        vm.trylogin = true;
        vm.msg = null;
      }else {
        vm.msg = "falha ao logar"; 
      }
      vm.progress = false;
    }

    var loginFail =  function () {
      vm.progress = false;
      vm.msg = "falha ao logar";
    }
  }
}());

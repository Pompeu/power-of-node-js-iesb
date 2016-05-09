(function () {
  'use strict';
  angular.module('app')
    .directive('signUp', signup);

  function signup (){

    var directive = {
      link : link,
      templateUrl : "./app/directives/signup/singup-btn.html",
      restrict : "E",
      controller : SignUpController,
      controllerAs : 'su',
      bindToController: true
    }

    return directive;

    function link (scope, el, attrs) {
    }
  }

  SignUpController.$inject = ['$mdDialog','signup'];

  function SignUpController ($mdDialog, signup) {
    var su =  this;
    su.trycad = false;
    su.openDialog = function (ev) {
      $mdDialog.show({
        controller: SignUpController,
        controllerAs: 'su',
        templateUrl: './app/directives/signup/dialog.form.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev
      });
    } 

    su.criar = function(user) {
      su.trycad = true;
      var caduser = signup.cad(user);
      caduser ? su.trycad = false : su.trycad = null;
      $mdDialog.cancel();
    }

    su.cancel = function () {
      $mdDialog.cancel();
    }
  }
}());

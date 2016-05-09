(function () {
  'use strict';

  angular.module('app')
    .directive('listVideos', listVideos)
    .value('VIDEOS', [
      {id : 1, title : 'Video 1', url : 'http://100.65.101.143:1337/videos/video-1'},
      {id : 2, title : 'Video 2', url : 'http://100.65.101.143:1337/videos/video-2'},
      {id : 3, title : 'Video 3', url : 'http://100.65.101.143:1337/videos/video-3'},
    ]);


    function listVideos() {
      return {
        restrict: 'E',
        replace: 'true',
        templateUrl: './app/directives/video-dialog/list.html',
        controller : ListCtrl,
        controllerAs : 'vm'
      };
    }

    ListCtrl.$inject = ['$mdDialog', 'VIDEOS', 'jwtHelper', '$window'];

    function ListCtrl ($mdDialog, VIDEOS, jwtHelper, $window) {
      var vm = this;
      vm.videos = VIDEOS;
      vm.video = null;
      vm.select = function (ev, video) {
        vm.video = video;
      }
      vm.sair = function () {
        $window.localStorage.removeItem("token");
        document.location.reload(true);
      };
    }	
})();

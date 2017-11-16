(function() {
    function HomeCtrl($scope, Room) {
      this.appTitle = "Bloc Chat";
      this.chatRooms = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope','Room',HomeCtrl]);
})();

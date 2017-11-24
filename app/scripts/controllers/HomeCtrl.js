(function() {
    function HomeCtrl($uibModal, $scope, Room) {
      this.appTitle = "Bloc Chat";

      $scope.chatRooms = Room.all;

      this.animationsEnabled = false;

      this.openNewRoomModal = function() {
        $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/NewRoomModal.html',
          controller: 'ModalCtrl',
          controllerAs: 'modalctrl',
          size: 'sm',
          backdrop: false,
        })
      }
      this.showChatRooms = function() {
        console.log($scope.chatRooms );
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal','$scope','Room',HomeCtrl]);
})();

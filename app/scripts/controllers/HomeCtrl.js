(function() {
    function HomeCtrl($uibModal, $scope, Room, Message) {

      this.animationsEnabled = false;

      $scope.appTitle = "Bloc Chat";

      $scope.chatRooms = Room.all;

      $scope.activeRoom = null;

      $scope.messages = null;

      $scope.openNewRoomModal = function() {
        $uibModal.open({
          animation: this.animationsEnabled,
          templateUrl: '/templates/NewRoomModal.html',
          controller: 'ModalCtrl',
          controllerAs: 'modalctrl',
          size: 'sm',
          backdrop: false,
        })
      }

      $scope.showObject = function() {
        console.log($scope.chatRooms);
      }

      $scope.setActiveRoom = function() {
        $scope.activeRoom = this.room;
        var currentRoomId = $scope.activeRoom.$id;

        $scope.messages = Message.getByRoomId(currentRoomId);
      };


    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal','$scope','Room','Message',HomeCtrl]);
})();

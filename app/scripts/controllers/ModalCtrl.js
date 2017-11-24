(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {

    this.close = function() {
      $uibModalInstance.dismiss('cancel');
    }

    $scope.text = null;

    $scope.createRoom = function() {
      var newRoom = {};

      if($scope.text) {
        newRoom.roomName = this.text;
      }

      console.log(Object.getOwnPropertyNames(newRoom.roomName));
      return newRoom;
    }

    this.showProperties = function(){
      console.log(Object.getOwnPropertyNames($newRoom))
    }
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope','$uibModalInstance','Room',ModalCtrl]);
})();

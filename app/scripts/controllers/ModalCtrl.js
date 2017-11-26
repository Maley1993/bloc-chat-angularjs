(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {

    $scope.close = function() {
      $uibModalInstance.dismiss('cancel');
    }

    $scope.text = null;

    $scope.createRoom = function() {
      var newRoom = {};

      if($scope.text) {
        var newRoomName = $scope.text;
        newRoom.$value = newRoomName;
      }

      Room.add(newRoom);
    }
    
  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope','$uibModalInstance','Room',ModalCtrl]);
})();

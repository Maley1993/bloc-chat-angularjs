(function() {
  function ModalCtrl($scope, $uibModalInstance, Room) {

    $scope.close = function() {
      $uibModalInstance.dismiss('cancel');
    }

    $scope.text = null;

    $scope.createRoom = function() {

      if($scope.text) {
        Room.add({
          '$value': $scope.text
        });
      }

      $scope.close();
    }

  }
  angular
    .module('blocChat')
    .controller('ModalCtrl', ['$scope','$uibModalInstance','Room',ModalCtrl]);
})();

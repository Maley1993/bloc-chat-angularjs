(function() {
  function UsernameModalCtrl($uibModalInstance, $cookies,$scope) {

    $scope.text = null;

    $scope.close = function() {
      $uibModalInstance.dismiss('cancel');
    }

    $scope.setUsername = function() {

      if($scope.text) {
        $cookies.put('blocChatCurrentUser', $scope.text);

        $cookies.getObject('blocChatCurrentUser');
      }

      $scope.close();
    };


  }

  angular
    .module('blocChat')
    .controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies','$scope', UsernameModalCtrl]);
})();

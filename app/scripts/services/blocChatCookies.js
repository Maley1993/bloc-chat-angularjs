(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        animation: this.animationsEnabled,
        templateUrl: '/templates/UsernameModal.html',
        controller: 'UsernameModalCtrl',
        controllerAs: 'userctrl',
        size: 'sm',
        backdrop: false,
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

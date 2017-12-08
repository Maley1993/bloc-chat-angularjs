(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(activeRoomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(activeRoomId));
    };

      return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

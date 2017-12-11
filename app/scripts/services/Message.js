(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all = messages;

    Message.getByRoomId = function(activeRoomId) {
      return $firebaseArray(ref.orderByChild('roomId').equalTo(activeRoomId));
    };

    Message.send = function(newMessage) {
      Message.all.$add(newMessage).then(function(newMessage) {
      var id = newMessage.key;
      console.log("added record with id " + id);
      });
    };

    Message.getTime = function () {
      var time = new Date();
      time = time.toLocaleString('en-US', { hour: 'numeric',minute:'numeric', hour12: true });
      return time;
    };

      return Message;
    };


  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray','$cookies', Message]);
})();

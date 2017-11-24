(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        //Use the firebase method $add here
        Room.all.$add({ room: "room" }).then(function(room) {
        var id = room.key;
        console.log("added record with id " + id);
        list.$indexFor(id); // returns location in the array
        });
    }
    Room.all.$loaded()
      .then(function() {
        console.log(Room.all); // true
      })

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

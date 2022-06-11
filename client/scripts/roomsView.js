// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    this.$select.append(`<option value="${roomname}>${roomname}</option>`);
    //var messages = Messages.retrieve('roomname', roomname);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // pressed option in list .onClick =>
    // this.renderRoom(clickedRoom)

  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

  }

};

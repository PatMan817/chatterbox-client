// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$button.on('click', this.handleClick);
    this.$select.on('change', this.handleChange);
    Rooms.add('Lobby');
    RoomsView.renderRoom('Lobby');
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (var rooms of Rooms._data) {
      this.renderRoom(rooms);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    RoomsView.$select.append(`<option value="${roomname}">${roomname}</option>`);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    if (event.target.nodeName === 'SELECT') {
      let selectedVal = RoomsView.$select.find(':selected').val();
      Rooms.selectRoom(selectedVal);
      let messages = Messages.retrieve('roomname', selectedVal);
      MessagesView.$chats[0].innerHTML = '';
      for (var message of messages) {
        MessagesView.renderMessage(message);
      }
    }
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let roomName = prompt('Please enter new room name', 'Lobby');
    Rooms.add(roomName);
    RoomsView.renderRoom(roomName);
  }

};

// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    var inputVal = $('#message').val();

    Parse.create({username: App.username, text: inputVal, roomname: Rooms._selectedRoom},
      function () {
        //Messages.add({username: App.username, text: inputVal, roomname: Rooms._selectedRoom});
        MessagesView.$chats[0].innerHTML = '';
        App.startSpinner();
        Messages._data = [];
        App.fetch(App.stopSpinner);
      }
    );
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
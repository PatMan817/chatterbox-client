// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', MessagesView.handleClick);
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats[0].innerHTML = '';
    Messages._data.forEach(message => {
      MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    if (message.text.includes('<') && message.text.includes('>')) {
      // message contains html tags
      MessagesView.$chats.append(MessageView.render({username: 'Admin', text: 'This is a harmful message'}));
    } else if (!!message.text && !!message.username) {
      MessagesView.$chats.append(MessageView.render(message));
    } else {
      return;
    }
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    if (event.target.className === 'username') {
      let clickedName = event.target.innerText;
      Friends.toggleStatus(clickedName);
      for (var message of $('#chats').children()) {
        var currentName = message.children[0].innerHTML;
        // check whether user is a friend with clickedName
        if (Friends._data.includes(currentName)) {
          $(message.children[0]).addClass('friend');
        } else {
          $(message.children[0]).removeClass('friend');
        }
      }
    }
  },

  //toggleClass: function() {
  //  for (var message of $('#chats').children()) {
  //    let username = message.children[0].innerHTML;
  //    if (Friends._data.includes(username)) {
  //      $(message.children[0]).addClass('friend');
  //    }
  //  }
  //}
};
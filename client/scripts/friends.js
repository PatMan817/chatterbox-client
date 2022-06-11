// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function(username) {
    //loop through data array to check if clicked user is a friend
    const userIndex = this._data.indexOf(username);
    if (userIndex !== -1) {
      this._data.splice(userIndex, 1);
    } else {
      this._data.push(username);
    }
  }
};
var my_data = [];
$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  var url = 'https://api.github.com/users/' + username;
  $.get(url, function(data) {
    var name = data.name;
    var img = data.avatar_url;
    if (data.name == null) {
        name = data.login;
    }
    $("#results").append('<li><a id = "'+ data.login +'" href = "'+ data.html_url +
      '">' + name + '</a></li>'); //Be aware of Concatinate
    $('#' + data.login).prepend('<img src="' + img + '" />');
    // The .prepend() method inserts the specified content as the first child of
    //each element in the jQuery collection (To insert it as the last child, use
    //.append()).


  });
  e.preventDefault();

});

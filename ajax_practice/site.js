var my_data;
$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  var url = 'https://api.github.com/users/' + username;
  $.get(url, function(data) {
    my_data = data;
    console.log("Your data should be ready in `my_data`");
  });

  e.preventDefault();
});

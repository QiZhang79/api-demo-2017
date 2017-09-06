console.log('You are here!');
function howManyPets(user) {
  var plural = "s";
  if (user.pets.length === 1) {
    plural = "";
  }
  return user.name + " has " + user.pets.length + " pet" + plural;
}

//var user = {
//  name:"QI",
//  age: 22,
//  pets: ["lili","lola"],
//  count_pets: function() {
//    return this.pets.length;
//  }
//  num_pets:
//}

//$('#user-form').on('submit', function(e) {
  //var username = $('#username').val();
  //console.log(username);
  //e.preventDefault();
//});

// $('#user-form').on('submit', function(e) {
//   var username = $('#username').val();
//   $('#results').append('<li>'+ username +'</li>');
//   e.preventDefault();
// })

$('#user-form').on('submit', function(e) {
  var username = $('#username').val();
  $('#results').append('<li><a href="https://api.github.com/users/' + username + '">' + username + '</a></li>');
  e.preventDefault();
});

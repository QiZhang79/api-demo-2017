console.log('You are here!');
function howManyPets(user) {
  var plural = "s";
  if (user.pets.length === 1) {
    plural = "";
  }
  return user.name + " has " + user.pets.length + " pet" + plural;
}

var user = {
  name:"QI",
  age: 22,
  pets: ["lili","lola"],
  count_pets: function() {
    return this.pets.length;
  }
  num_pets:  
}

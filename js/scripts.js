var Tamagotchi = {
  initialize: function(name) {
  this.name = name;
  this.foodLevel = 10;
  this.sleepLevel = 10;
  this.activityLevel = 10;
  },
  timePasses: function() {
    this.foodLevel = this.foodLevel - Math.random();
    this.sleepLevel = this.sleepLevel - Math.random();
    this.activityLevel = this.activityLevel - Math.random();
  },
  isAlive: function() {
    console.log(this.foodLevel);
    if (this.foodLevel > 0) {
      return true;
    } else {
      return false;
    }
  }
};

$(document).ready(function(){
  $("form#Tamagotchi").submit(function (event) {
    event.preventDefault();

    var newName = $("input#name").val();
    newName = Object.create(Tamagotchi);
    newName.initialize();
    newName.name = $("input#name").val();

    setInterval(function(){
      newName.timePasses();
    $("#food").text(newName.foodLevel);
    $("#sleep").text(newName.sleepLevel);
    $("#activity").text(newName.activityLevel);
       }, 3000);

    $("#food").text(newName.foodLevel);
    $("#sleep").text(newName.sleepLevel);
    $("#activity").text(newName.activityLevel);
  });
});


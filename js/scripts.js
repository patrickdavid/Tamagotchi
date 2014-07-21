var Tamagotchi = {
  initialize: function(name) {
  this.name = name;
  this.foodLevel = 2;
  this.sleepLevel = 2;
  this.activityLevel = 2;
  },
  timePasses: function() {
    this.foodLevel = this.foodLevel - Math.random();
    this.sleepLevel = this.sleepLevel - Math.random();
    this.activityLevel = this.activityLevel - Math.random();
  },
  isAlive: function() {
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

    $("#tom-name").text(newName.name);

    var intervalID = setInterval(function() {
      newName.timePasses();
    $("#food").text(newName.foodLevel);
    $("#sleep").text(newName.sleepLevel);
    if ((newName.foodLevel < 0) || (newName.sleepLevel < 0)) {
      $("#output").text("You are not ready for life");
      clearInterval(intervalID);
      console.log(newName.isAlive())
    }
    $("#activity").text(newName.activityLevel);
       }, 3000);



  });
});


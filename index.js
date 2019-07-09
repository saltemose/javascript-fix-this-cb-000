var cake = {
  name: "German Chocolate Cake",
  ingredients: ["eggs", "flour", "oil", "chocolate", "sugar", "butter"],
  topping: "coconut frosting",
  bakeTemp: "425 degrees",
  bakeTime: "45 minutes",
  customer: "Tommy",
  decorate: function(updateFunction) {
    var status = "Decorating with " + this.topping + ". Ready to eat soon!"
    updateFunction(status)
    setTimeout(() => {
      updateFunction(serve.apply(this, ["Happy Eating!", this.customer]))
    }, 2000)
  }
}

var pie = {
  name: "Apple Pie",
  ingredients: ["apples", "flour", "eggs", "butter", "sugar"],
  topping: "streusel",
  bakeTemp: "350 degrees",
  bakeTime: "75 minutes",
  customer: "Tammy"
}

function makeCake() {
  var updateCakeStatus = updateStatus.bind(this);
  updateCakeStatus("Prep")
  mix.call(cake, updateCakeStatus)
}

function makePie() {
  var updatePieStatus = updateStatus.bind(this);
  updatePieStatus("Prep")
<<<<<<< HEAD
  pie.decorate = cake.decorate.bind(pie);
=======
  pie.decorate() = cake.decorate.bind(pie);
>>>>>>> 0f56446b7fa9541661892317f1af26f3319f379d
  mix.call(pie, updatePieStatus);

}

function updateStatus(statusText) {
  this.getElementsByClassName("status")[0].innerText = statusText
}

function bake(updateFunction) {
  var status = "Baking at " + this.bakeTemp + " for " + this.bakeTime
  updateFunction(status)
  setTimeout(() => {
    cool.call(this, updateFunction)
  }, 2000)
}

function mix(updateFunction) {
  var status = "Mixing " + this.ingredients.join(", ")

  updateFunction(status)
  setTimeout(() => {
    bake.call(this, updateFunction)
  }, 2000)
}

function cool(updateFunction) {
  var status = "It has to cool! Hands off!"
  updateFunction(status)
  setTimeout(() => {
    this.decorate(updateFunction)
  }, 2000)
}

function makeDessert() {
  //add code here to decide which make... function to call
  //based on which link was clicked
  if(this.parentNode.id === "cake"){
    makeCake.call(this.parentNode)
  }else {
    makePie.call(this.parentNode)
  }
}

function serve(message, customer) {
  //you shouldn't need to alter this function
  return(customer + ", your " + this.name + " is ready to eat! " + message)
}

document.addEventListener("DOMContentLoaded", function(event) {
  //you shouldn't need to alter this function
  var cookLinks = document.getElementsByClassName("js-make")
  for(var i=0; i<cookLinks.length; i++) {
    cookLinks[i].addEventListener("click", makeDessert)
  }
});

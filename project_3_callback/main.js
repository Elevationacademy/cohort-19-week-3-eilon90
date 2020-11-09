//Exercise 1
const push = function () {
    console.log("pushing it!")
  }
  
const pull = function () {
console.log("pulling it!")
}

function pushPull(func) {
    func();
}
  
pushPull(push) //should print "pushing it!"
pushPull(pull) //should print "pulling it!"


//Exercise 2
const returnTime = function (time) {
    alert('The current time is: ' + time)
}

function getTime(func) {
    const time = new Date();
    func(time);
}
  
getTime(returnTime)
  

//Exercise 3
const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
  displayData(alert, logData, "I like to party")

  function logData(data) {
      console.log(data);
  }
  

//Exercise 4
const add = (a, b, c) => a + b + c;
// const result = add(3, 2, 4)
// console.log(result);


//Exercise 5
const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
// console.log(capitalize("bOb")) // returns Bob
// console.log(capitalize("TAYLOR")) // returns Taylor
// console.log(capitalize("feliSHIA")) // returns Felishia


//Exercise 6
const determineWeather = temp => {
    if(temp > 25){
        return "hot"
    }
    return "cold"
}

const commentOnWeather = temp => `It's ${determineWeather(temp)}`;
// console.log(commentOnWeather(30));
// console.log(commentOnWeather(22));


//Exercise 7
const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
}
    
const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
    
const makeSound = sound => alert(sound)
    
setTimeout(function(){
explode(shineLight, makeSound, "BOOM")
}, 2000);
/*
    
// Set the date we're counting down to
var countDownDate = new Date("Dec 01, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
*/

/*

let canv1 = document.querySelector("#progress")
let context1 = canv1.getContext('2d')

context1.lineWidth  = 5;
context1.stokeStyle = "black";
context1.strokRect(10,30,130,90);*/

let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let p1 = document.getElementById('p1');
let timeoutId;
let intervalId;

let dec = 0;
let sec = 0;
let min = 0;
let heu = 0;
p1.textContent = heu + ' : ' + min + ' :' + sec + ' . ' + dec;

b1.addEventListener('click', message);
b2.addEventListener('click', stopDelai);
b3.addEventListener('click', timer);
b4.addEventListener('click', stopTimer);

function message(){
    timeoutId = setTimeout(alert, 2000, 'Message d\'alerte après 2 secondes'); 
}
function stopDelai(){
    clearTimeout(timeoutId);
}

function timer(){
    intervalId = setInterval(function(){
        p1.textContent = heu + ' : ' + min + ' : ' + sec + ' . ' + dec;
        dec += 1;
        if(dec >= 10){dec = 0; sec += 1;}
        if(sec >= 60){sec = 0; min += 1;}
        if(min >= 60){min = 0; heu += 1;}
    }, 100)
}
function stopTimer(){
    clearInterval(intervalId);
}

const c = document.querySelector('canvas');
const ctx = c.getContext('2d');
ctx.lineWidth = 8;
ctx.lineCap = 'round';
ctx.strokeStyle = '#2284b5'




const p = document.querySelector('#progress')

let value = getSecond()
//alert('value'+value)
p.innerHTML=getSecond().value
//ocument.getElementById('#progress').innerHTML=getSecond().value
const progress = () => {
  if (value <= 0) {
    return
  }

  value--;
  ctx.clearRect(0, 0, c.width, c.height);
  p.innerHTML = value

  ctx.beginPath();
  ctx.arc(c.width / 2, c.height / 2, c.width / 3, 0, value / getSecond() * Math.PI * 2);
  ctx.stroke();
  ctx.closePath();

  window.setTimeout(progress, 80)
}

progress()

/*
function log(msg) {
    var logElem = document.querySelector("#progress");
   
    var time = new Date();
    var timeStr = time.toLocaleTimeString();
    logElem.innerHTML += timeStr + ": " + msg + "<br/>";
  }
  
  log("Logging mouse events inside this container...");
  */


//function pour créer un input

 function getSecond() {
    let word = document.getElementById("myText").value;
    let h=parseInt(word.substring(0,2))
    let m=parseInt(word.substring(3,5))
    let s=parseInt(word.substring(6,8))
    let timeEnSeconde=h*60+m*60+s
    //document.getElementById('#progress').innerHTML=timeEnSeconde.value
   //document.getElementById('#progress1').innerHTML=timeEnSeconde
    return timeEnSeconde
    
    

 }
 alert(getSecond())

function changeScreen()
{
    let x=document.getElementById('myText').value
    document.getElementById('progress').innerHTML=x

}



 //createText() 





var btn = document.createElement("BUTTON");
var t = document.createTextNode("Go!!!");
btn.appendChild(t);
document.body.appendChild(btn);

btn.addEventListener('click',function(){alert('Bouton cliqué')})
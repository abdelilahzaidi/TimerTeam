const main = document.createElement('main')
document.body.appendChild(main)


//create div timer
const timer = document.createElement('div')
main.appendChild(timer)

//create a butto n start and stop

const button=document.createElement('button')
main.appendChild(button)
button.innerHTML='Start Timer'


const buttonClear= document.createElement('button')
main.appendChild(buttonClear)
buttonClear.innerHTML='Reset'

const timeRecords= document.createElement('button')
main.appendChild(timeRecords)
timeRecords.innerHTML='Records'


timer.innerHTML='0'

let x=0
let start=false
const timing = (event)=>{
    if(event != undefined)
    {
        if(start == true)
            {
                start=false
                button.innerHTML="restart"
            }
        else{
            start=true
            button.innerHTML="stop"
        }
    }
    if(start == true)
    {
        x +=0.1
        timer.innerHTML=x.toFixed(1)
        setTimeout(timing,100)
        
    }
    else
    {
        timer.innerHTML=x.toFixed(1)
        
    }
    

}
const clearTimer =(event) =>
{
    if(event != undefined)
    {
        if(start == false)
            {
                x=0
                timer.innerHTML=x
            }
       
        
    }

}


const timeRecorder =()=>{
    const timerDiv=document.createElement('div')
    main.appendChild(timerDiv)
    timerDiv.innerHTML=x.toFixed(1)+" records"

}
button.addEventListener('click',timing)
buttonClear.addEventListener('click',clearTimer)

timeRecords.addEventListener('click',timeRecorder)


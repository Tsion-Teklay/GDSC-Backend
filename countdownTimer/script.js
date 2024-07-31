document.addEventListener("DOMContentLoaded", function(){
    const secondsInput = document.getElementById('secondsInput')
    const secondDisplay = document.getElementById('secondDisplay')

    secondsInput.addEventListener("input", function(){
        secondDisplay.textContent = `${secondsInput.value}`
    })
})

function timer(){
    let seconds=secondsInput.value
    let countdown = setInterval(() =>{
        seconds--
        secondDisplay.textContent=seconds

        if(seconds<0){
            secondDisplay.textContent="TIME UP!"
            clearInterval(countdown)
        }
    },1000)
} 



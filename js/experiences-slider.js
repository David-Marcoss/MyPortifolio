
function sliderButtonclick(event){
    event.preventDefault()
    
    const buton = event.target.tagName === "IMG" ? event.target.parentElement : event.target
    const cardViseble = document.querySelector(".card-active")
    let newCardViseble = null
    let direction = null

    console.log(buton.id, buton)

    if(buton.id === "pass-button"){
       newCardViseble = cardViseble.nextElementSibling
        if(newCardViseble.nodeName != "DIV"){
            newCardViseble = document.querySelector(".experiences-card")
        }
        
        direction = "left"
    }else{
        newCardViseble = cardViseble.previousElementSibling;

        if(newCardViseble.nodeName != "DIV"){
            let sliderButtons = document.querySelectorAll(".experiences-card")

            newCardViseble = sliderButtons[sliderButtons.length-1]
        }

        direction = "right"

    }
    moveCard(cardViseble,newCardViseble,direction)
}

function mover(elemento,start,end,step, direction,callback){
    
    start = start - step
    
    if ( start >= end ){

        if(direction === "left")
            elemento.style.left = start + "px"
        else
            elemento.style.right = start + "px"

        setTimeout(() => mover(elemento,start,end,step,direction,callback), 10)
    
    }else{
        callback()
    }
}


function moveCard(cardMove, newCardViseble, direction){

    const start = innerWidth
    const end  = -1

    cardMove.style.position = "relative"

    mover(cardMove, start,end, 50, direction,()=> {
        cardMove.classList.remove("card-active")
        cardMove.style.position = "static"
        
        newCardViseble.classList.add("card-active")
    })
}


function slider(){
    
    const event = new Event('click');
    let sliderButtons = document.querySelectorAll(".slider-buttons")

    console.log(sliderButtons[sliderButtons.length-1])

   
    setInterval( () => {
        sliderButtons[sliderButtons.length-1].dispatchEvent(event)
    },6000)

}


document.querySelectorAll(".slider-buttons").forEach( element =>{
    element.addEventListener("click",sliderButtonclick)
})

slider()
const container = document.querySelector(".container")
const erase = document.querySelector(".btn-erase")
const changeSize = document.querySelector(".btn-size")
let respuesta = 257
const Arrdivs = []

window.addEventListener("load", (e)=>{
    for (let i = 1; i < respuesta; i++) {
   let div = document.createElement("div")
   div.classList.add("div-hijos")
   Arrdivs.push(div)
   container.appendChild(div)
}

})

changeSize.addEventListener("click",(e)=>{
    let gridPixels = container.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.remove());

    respuesta = Number(prompt("Inter a number to change the size"))
    if(respuesta > 100){
       respuesta = Number(prompt("Error the Number is too big it may crash your pc"))
       container.style.gridTemplateColumns = `repeat(${respuesta},1fr)`
       container.style.gridTemplateRows = `repeat(${respuesta},1fr)`
       console.log(respuesta)
    
    } else{
        
        container.style.gridTemplateColumns = `repeat(${respuesta},1fr)`
        container.style.gridTemplateRows = `repeat(${respuesta},1fr)`
        console.log(respuesta)
     
    }

    for (let i = 0; i < respuesta ** 2 ; i++) {
        let div = document.createElement("div")
        div.classList.add("div-hijos")
        Arrdivs.push(div)
        container.appendChild(div)

    }  
})



erase.addEventListener("click",(e)=>{
    Arrdivs.forEach(e => {  
        e.style.backgroundColor = "white"
    })
})

container.addEventListener("mouseover",(e) =>{
    e.target.style.backgroundColor = "black"
})







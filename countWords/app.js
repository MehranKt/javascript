let box = document.getElementById("box")
let words = document.querySelector("#words__count")
let characters = document.querySelector("#characters__count")

function show(){
    let boxValue = box.value.trim().split(" ").filter(function(n){
        return n != ''
    })
    words.innerHTML = boxValue.length
    boxValue = boxValue.join("")
    characters.innerHTML = boxValue.length
    console.log(words.innerHTML)
}

box.addEventListener("keyup",show)

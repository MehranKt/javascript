let car = document.querySelector("#car")


window.onkeydown = detectKey;
function detectKey(e) {
    var left = document.getElementById('car').offsetLeft;
    var top = document.getElementById('car').offsetTop;
    e = e || window.event;
    if (e.keyCode == "38") {
        // up arrow
        car.style.top  = (top-80)+"px";
        car.style.transform = "rotate(-90deg)"
    }
    else if (e.keyCode == '40') {
        // down arrow
        car.style.top  = (top+80)+"px";
        car.style.transform = "rotate(90deg)"
    }
    else if (e.keyCode == '37') {
       // left arrow
        car.style.left  = (left-80)+"px";
        car.style.transform = "rotate(-180deg)"
    }
    else if (e.keyCode == '39') {
       // right arrow
        car.style.left  = (left+80)+"px";
        car.style.transform = "rotate(0deg)"
    }
}

window.onclick = function(e){
    var evt = window.event || e;
    var x = evt.clientX 
    var y = evt.clientY
    console.log(x,y)
    car.style.left = (x-50 + "px")
    car.style.top = (y-50 + "px")
}


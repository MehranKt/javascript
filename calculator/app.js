let answer = document.querySelector("#answer")
let allClear = document.querySelector("#allClear")
let clear = document.querySelector("#clear")
// let percent = document.querySelector("#percent")
// let division= document.querySelector("#division")
// let multi = document.querySelector("#multi")
// let subs = document.querySelector("#subs")
// let plus = document.querySelector("#plus")
// let seven = document.querySelector("#seven")
// let eight = document.querySelector("#eight")
// let nine = document.querySelector("#nine")
// let four = document.querySelector("#four")
// let five = document.querySelector("#five")
// let six = document.querySelector("#six")
// let one = document.querySelector("#one")
// let two = document.querySelector("#two")
// let three = document.querySelector("#three")
// let doubleZero = document.querySelector("#doubleZero")
// let zero = document.querySelector("#zero")
// let dot = document.querySelector("#dot")
// let input = document.querySelector("input")
let calcBody = document.querySelector(".calc__body")

// eval("5 +12 *85/24")



for(let i =0; i< calcBody.children.length; i++){
let answer = document.querySelector("#answer")

    if(calcBody.children[i].value == "="){
        calcBody.children[i].addEventListener("click", equal)
    }else{
        calcBody.children[i].addEventListener("click", function(e){
            if(answer.value == 0){
                answer.value = ""
            }   
            answer.value += e.target.value
        })
    }
    
    // console.log(calcBody.children[i].value)
}

function equal(){
    answer.value = eval(answer.value);
}
allClear.addEventListener("click", function(){
    answer.value = "0"
})
clear.addEventListener("click", function(){
 let newarray = answer.value.split("");
 newarray.pop()
 newarray.pop()
 answer.value = newarray.join("")
 console.log(newarray)    
 if(answer.value.length == 0){
    answer.value = "0"
 }
})
function calculate(){
    let array = (answer.value).split("");
    if(array.includes("%")){
        if(array.includes("+")){
            array.pop();
            console.log(array)
            var newarray = array.join("");
            var dividedarray = newarray.split("+");
            console.log(dividedarray)
            var a = Number(dividedarray[0]);
            var b = Number(dividedarray[1]);
            var total = a + a / 100 * b;
            answer.value = total;
        }
        else if(array.includes("-")){
            array.pop();
            var newarray = array.join("");
            var dividedarray = newarray.split("-");
            var a = Number(dividedarray[0]);
            var b = Number(dividedarray[1]);
            var total = a - a / 100 * b;
            answer.value = total;
        }
        else if(array.includes("*")){
            array.pop();
            var newarray = array.join("");
            var dividedarray = newarray.split("*");
            var a = Number(dividedarray[0]);
            var b = Number(dividedarray[1]);
            var total = a * b / 100;
            answer.value = total;
        }
        else if(array.includes("/")){
            array.pop();
            var newarray = array.join("");
            var dividedarray = newarray.split("/");
            var a = Number(dividedarray[0]);
            var b = Number(dividedarray[1]);
            var total = a * 100 / b;
            answer.value = total;
        }else if(!array.includes("%")) {
            var total = eval(answer.value)
            answer.value = total}
    }
}

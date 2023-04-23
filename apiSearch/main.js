var container = document.querySelector("#container");
var image = document.querySelector("#img");
var category = document.querySelector("#category");
var description = document.querySelector("#descrip");
var id = document.getElementById("id");
var count = document.getElementById("count");
var price =document.getElementById("price");
var title = document.getElementById("title")
var myDATA = [];
window.addEventListener("load",()=>{
   fetch('https://fakestoreapi.com/products')
    .then((response)=> response.json())
    .then((data) =>{
       myDATA = data;
       get()
     } );
})
function get(){
  for(let i = 0;i<myDATA.length ; i++){
  var newElement = document.createElement("div");
  newElement.classList.add("product_place");
  newElement.innerHTML = `<div class="inform">
  <span class="id" id="id">${myDATA[i].id}</span>
  <span>|</span>
  <span class="count" id="count">${myDATA[i].rating.count}</span>
</div>
<span class="left"><img src="${myDATA[i].image}" alt="" id="img"></span>
<div class="mid">
  <span class="product_title" id="title">${myDATA[i].title.slice(0,25)} ...
      <span id="price">${myDATA[i].price}</span>
  </span>
  <span class="product_description line-clamp line-clamp--4" id="descrip">${myDATA[i].description}</span>
  <span class="product_category" id="category">${myDATA[i].category}</span>
</div>
<div class="right">
<span class="rating">${myDATA[i].rating.rate}</span>
<button>More Info</button>
</div>`
container.append(newElement)
  }
  }
  ;
function search(){
    container.innerHTML = "";
    var inputfield = document.getElementById("search");
    var filter = inputfield.value.toUpperCase();
       for(let i = 0;i < myDATA.length ; i++){
        var secData = Object.values(myDATA[i].rating).join(" ").toUpperCase();
        var myRenderData =Object.values(myDATA[i]).join(" ").toUpperCase();
        if(myRenderData.indexOf(filter) > -1 || secData.indexOf(filter) > -1){
            var newElement = document.createElement("div");
            newElement.setAttribute("class","product_place");
            newElement.innerHTML = `<div class="inform">
  <span class="id" id="id">${myDATA[i].id}</span>
  <span>|</span>
  <span class="count" id="count">${myDATA[i].rating.count}</span>
</div>
<span class="left"><img src="${myDATA[i].image}" alt="" id="img"></span>
<div class="mid">
  <span class="product_title" id="title">${myDATA[i].title.slice(0,25)} ...
      <span id="price">${myDATA[i].price}</span>
  </span>
  <span class="product_description" id="descrip">${myDATA[i].description.slice(
    0,200
  )} ...</span>
  <span class="product_category" id="category">${myDATA[i].category}</span>
</div>
<div class="right">
<span class="rating">${myDATA[i].rating.rate}</span>
<button>More Info</button>
</div>`
container.append(newElement)
}
     if(filter == ""){
        container.innerHTML = "";
       get();
        }
}
};
let info = document.querySelector("#info")
document.addEventListener("mousemove", (e)=>{
    if(!e.altKey){
        console.clear;
        info.style.backgroundColor = "transparent"
        info.innerHTML= ""
    }else{
        info.innerHTML = `Tag : ${e.target.tagName}<br>
        Class : ${e.target.classList}<br>
        <span id="none">Id : ${e.target.id}</span><br>`
        info.style.left = `${e.clientX +5}px`
        info.style.top = `${e.clientY -100}px`
        info.style.backgroundColor = "gray"
    }
})

const columns = [
    {
      id: 1,
      key: "draft",
      title: "Draft",
    },
    {
      id: 2,
      key: "todo",
      title: "Todo",
    },
    {
      id: 3,
      key: "inprogress",
      title: "In Progress",
    },
    {
      id: 4,
      key: "done",
      title: "Done",
    },
  ];
  const tasks = [
    {
      id: 1,
      parentId: 1,
      title: "Lorem ipsum dolar sit 1",
    },
    {
      id: 2,
      parentId: 3,
      title: "Lorem ipsum dolar sit 2",
    },
  ];

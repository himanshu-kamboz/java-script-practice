let newNevBar = document.getElementById("nav-items")
let btn = document.getElementById("hide");

btn.addEventListener("click" , ()=>{
    newNevBar.classList.toggle("active");
    btn.classList.add("btn")
})
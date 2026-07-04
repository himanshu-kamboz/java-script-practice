let count =0;

let countNum = document.getElementById("count");
let incrementBtn = document.getElementById("increment");
let decrementBtn = document.getElementById("decrement");
let resetBtn = document.getElementById("reset");

function updateNum (){
    countNum.textContent=count;
}

incrementBtn.addEventListener("click",function(){
    count++;
    updateNum();
})

decrementBtn.addEventListener("click",function(){
    count--;
    updateNum();
})

resetBtn.addEventListener("click",function(){
    count=0;
    updateNum();
})
let preButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

nextButton.addEventListener("click", function(){
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0])
})

preButton.addEventListener("click", function(){
    let items = document.querySelectorAll(".item");
    let lastItem = items[items.length - 1];
    document.querySelector(".slide").insertBefore(lastItem, items[0])
    
})
const button = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");

// console.log(cat);

button.addEventListener("click", function () {
    // console.log("It's working.")
    cat.classList.add("show");
})
const initial = document.querySelector(".initial_page");
const after = document.querySelector(".rated_page");
const suBmit = document.getElementById("submit_btn")
const again = document.getElementById("BTN");
const txt = document.getElementById("val")
const rates = document.querySelectorAll(".btn")

suBmit.addEventListener("click", function(e) {
    after.classList.remove("hide");
    initial.style.display = "none";
})


again.addEventListener("click", function(e) {
    after.classList.add("hide")
    initial.style.display = "block"
})

rates.forEach(function(rate) {
    rate.addEventListener("click", function(e) {
        txt.innerHTML = rate.innerHTML;
    })
})


const stars = document.querySelectorAll(".stars");
stars.forEach((star) => {
    star.addEventListener('click', (e) => {
        stars.forEach((el) => el.classList.remove("active")); //to remove existing active class in previous clicks
        addActive(star.id);
    })
})

function addActive(val) {
    for (let i = 0; i <= val; i++) {
        stars[i].classList.add("active");
    }
}
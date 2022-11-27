
ScrollReveal().reveal('.text', {
    origin: "top",
    delay: 500,
    distance: "10px",
    easing: 'ease-in-out',
});
let closeMenu = document.getElementById("closeMenu");

closeMenu.onclick = _ => {
    document.getElementsByClassName("menu")[0].classList.remove("active")
}
document.getElementById("menu").onclick = _ => {
    document.getElementsByClassName("menu")[0].classList.toggle("active")
}


fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
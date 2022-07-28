const items = document.getElementById("items");
const audio = new Audio("./sonido.mp3")
let i = 0;
items.addEventListener("click", (e) => {
    if (i == 0) {
        audio.load()
        audio.play();
        i = 1;
    } else {
        audio.load()
        audio.play();
        i = 0;
    }
    Swal.fire({
        imageUrl: './image.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'A tall image'
    })
})
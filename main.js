const items = document.getElementById("items");
const elementos = document.querySelectorAll("#items .item");
const random = Math.round(Math.random() * items.children.length);
const audio = new Audio("./Esta_Si.mp3")
const audio2 = new Audio("./Esta_no.mp3")
const audio_bad = new Audio("./El gatito_tuyo_te_perdio.mp3")
// let i = 0;
items.addEventListener("click", (e) => {
    if (e.target.textContent == random) {
        Swal.fire({
            imageUrl: './image.jpg',
            imageWidth: 450,
            imageHeight: 450,
            imageAlt: 'A tall image',
            showConfirmButton:false,
        })
        audio.load();
        audio.play();
        e.target.style.border="5px solid yellow"
        setTimeout(() => {
            audio_bad.play();
        }, 1500);
    } else {
        Swal.fire({
            imageUrl: './oso.gif',
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'A tall image'
        })
        e.target.style.opacity = "0";
        audio2.load();
        audio2.play();
    }
})

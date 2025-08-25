let url = "https://dog.ceo/api/breeds/image/random"
let btn = document.querySelector(".btn")

let imgBox = document.querySelector(".box");
btn.addEventListener("click", () => {
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json();
        })
        .then((data) => {
            console.log(data);
            imgBox.style.backgroundImage = `url(${data.message})`;
            imgBox.style.backgroundSize = "cover"
        })
        .catch((err) => {
            console.log(err);
        })
})
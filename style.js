let url = ("https://catfact.ninja/fact");
let btn = document.querySelector("button");
// let div = document.querySelector("div");
let fact=document.querySelector(".fact");



btn.addEventListener("click", () => {
    fetch(url)
        .then((res) => {
            console.log(res);
            return res.json();

        })
        .then((data) => {
            console.log(data);

            // let div = document.querySelector(".fact");
            fact.innerText = `Fact :${data.fact}`;
            fact.style.color = "Black"
            // div.append(div);
            // div.innerText = `${ul.children.length} Random Facts`


            // div.insertAdjacentElement("afterend", div);



        })
        .catch((error) => {
            console.log(error)
        })
})
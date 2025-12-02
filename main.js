const cards = [
    {
        img: "card-img.svg",
        name: "Cozy studio in Los Angeles",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "IMAGE (8).svg",
        name: "Tiny home in San Diego",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "IMAGE (9).svg",
        name: "Crown house in New York",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "Frame (4).svg",
        name: "Family house in Los Angeles",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "Frame (3).svg",
        name: "Studio in Las Vegas",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "IMAGE (10).svg",
        name: "San Diego story",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
];

const card = document.getElementById("cards");

card.innerHTML = cards.map(item => `
    <div class="card">
        <img class="card-img" src="${item.img}" alt="${item.name}">
        <div class="card-text">
            <h2>${item.name}</h2>
            <h4>${item.price}</h4>
            <p>${item.addres}</p>
            <p>2 2 840 sqft</p>
        </div>
    </div>
`).join("");

const cards2 = [
    {
        img: "card-img.svg",
        name: "Cozy studio in Los Angeles",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "IMAGE (8).svg",
        name: "Tiny home in San Diego",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
    {
        img: "IMAGE (9).svg",
        name: "Crown house in New York",
        price: "$ 1,200.00 USD",
        addres: "2263 Southlea, Los Angeles",
    },
];

const card2 = document.getElementById("cards2");

card2.innerHTML = cards2.map(item => `
    <div class="card2">
        <img class="card2-img" src="${item.img}" alt="">
        <div class="card2-text">
            <h2>${item.name}</h2>
            <h4>${item.price}</h4>
            <p>${item.addres}</p>
            <p>2 2 840 sqft</p>
        </div>
    </div>
`).join("");


const products = [{
        title: 'Bluzka Adidas',
        price: 99.99,
        img: 'images/adidas.jpg',
    },
    {
        title: 'Kurtka zimowa Reserved',
        price: 199.99,
        img: 'images/kurtkazimowa.jpeg'
    },
    {
        title: 'Czapka zimowa',
        price: 45.99,
        img: 'images/czapka.jpeg'
    },
    {
        title: 'Szalik',
        price: 29.99,
        img: 'images/szalik.jpeg'
    }
]




const productsListDiv = document.querySelector('.products_list');
console.log(productsListDiv);

const renderProductsList = () => {
    products.forEach((product) => {
        console.log(product);
        productsListDiv.innerHTML += `<div class="products_list-item">
        <img src="${product.img}" alt="Logo produktu" class="products_list-item-img"></img>
        <h3>${product.title}</h3>
        <h4>Cena: ${product.price} zł</h4>
        </div>`
    })
}



renderProductsList();
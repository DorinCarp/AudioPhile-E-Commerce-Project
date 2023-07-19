const product = [
    {
        id: 0,
        image: 'Audiophile/assets/product-xx99-mark-one-headphones/desktop/image-product.jpg',
        title: 'XX99Mark1Headphones',
        price: 2500,
    },
    {
        id: 1,
        image: 'Audiophile/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg',
        title: 'XX99Mark2Headphones',
        price: 2550,
    },
    {
        id: 2,
        image: 'Audiophile/assets/product-xx59-headphones/desktop/image-product.jpg',
        title: 'XX59 Headphones',
        price: 2400,
    },
    {
        id: 3,
        image: 'Audiophile/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg',
        title: 'YX1 Earphones',
        price: 1050,
    },


    {
        id: 3,
        image: 'Audiophile/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg',
        title: 'ZX7 Speaker',
        price: 1600,
    },

    {
        id: 3,
        image: 'Audiophile/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg',
        title: 'ZX9 Speaker',
        price: 1780,
    },



];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtocart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}

function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total = total + price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }


}

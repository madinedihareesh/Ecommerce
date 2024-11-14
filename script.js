let cartValue = document.getElementById('cartValue');
let productContainer = document.getElementById('product-container');

// Initialize cart count from localStorage
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartValue.innerHTML = cart.length;
}

// Call updateCartCount on page load
updateCartCount();



async function fetchdata() {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        productContainer.innerHTML = '';
        products.forEach((item,index) => {
            let card = `
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <img src="${item.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${item.title.length > 10 ? item.title.slice(0, 10) + '...' : item.title}</div>
                        <div>${item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}</div>
                        <hr>
                        <p>${'$' + item.price}</p>
                        <hr>
                        <div class="align-content-center">
                            <button class="btn btn-dark">Details</button>
                            <button class="btn btn-dark" onclick="addToCart(${index})">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
            productContainer.innerHTML += card;
       
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Add product to cart in localStorage
function addToCart(selectedIndex) {
    let product = products[selectedIndex];
    var productId=product.id;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.id === productId);

    if (productIndex>=0) {
       cart[productIndex].quantity++;
    } else {
        product.quantity=1;
        cart.push(product);

    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
// Event Listeners for category buttons
document.getElementById('mens-clothing').addEventListener('click', () => filterByCategory("men's clothing"));
document.getElementById('womens-clothing').addEventListener('click', () => filterByCategory("women's clothing"));
document.getElementById('jewelery').addEventListener('click', () => filterByCategory("jewelery"));
document.getElementById('Electronics').addEventListener('click', () => filterByCategory("electronics"));

// Filter Functions
async function filterByCategory(category) {
    try {
        let response = await fetch('https://fakestoreapi.com/products');
        let data = await response.json();
        let filteredData = data.filter(item => item.category === category);
        productContainer.innerHTML = '';
        filteredData.forEach((item,index) => {
            let card = `
            <div class="col-md-4 mb-4">
                <div class="card text-center">
                    <img src="${item.image}" alt="Product Image" style="width:100%;height:400px" />
                    <div class="fs-4">${item.title.length > 10 ? item.title.slice(0, 10) + '...' : item.title}</div>
                    <div>${item.description.length > 100 ? item.description.slice(0, 100) + '...' : item.description}</div>
                    <hr>
                    <p>${'$' + item.price}</p>
                    <hr>
                    <div class="align-content-center">
                        <button class="btn btn-dark">Details</button>
                        <button class="btn btn-dark" onclick="addToCart(${index})">Add to Cart</button>
                    </div>
                </div>
            </div>`;
        productContainer.innerHTML += card;
        });
    } catch (error) {
        console.error('Error filtering products:', error);
    }
}



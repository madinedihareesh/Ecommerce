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
        products.forEach((item, index) => {
            let card = `
                <div class="col-md-4 col-sm-12 mb-4">
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
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(item => item.id === product.id);

    if (productIndex >= 0) {
        cart[productIndex].quantity++;
    } else {
        product.quantity = 1;
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
        filteredData.forEach((item, index) => {
            let card = `
                <div class="col-md-4  mb-4">
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

function displayProducts() {
    updateCartCount()
    let itemContainer = document.getElementById('itemContainer');
    let priceContainer = document.getElementById('priceContainer');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    // Clear containers to prevent duplication
    itemContainer.innerHTML = '';
    priceContainer.innerHTML = '';

    if (cart.length > 0) {
        document.getElementById('emptyCart').style.display = 'none';
        document.getElementById('SelectedItems').style.display = 'block';
     
        let itemHeder=`<h3 class="border-bottom border-2 p-3" style="background-color:whitesmoke;">Item List</h3>`;
        itemContainer.innerHTML+=itemHeder;
       
        // Render cart items
        cart.forEach((item, index) => {
            totalPrice += Math.floor(item.price * item.quantity);
            let card = `
            
                <div class="container d-flex justify-content-between border-bottom">
                    <div>
                        <img src="${item.image}" alt="Product Image" width="150px" height="150px">
                    </div>
                    <div>${item.title}</div>
                    <div>
                        <div>
                            <button onclick="decreaseQuantity(${index})" class="btn btn-none">-</button>
                            ${item.quantity}
                            <button onclick="increaseQuantity(${index})" class="btn btn-none">+</button>
                        </div>
                        <div class="mt-3">${item.quantity} × $${item.price}</div>
                    </div>
                </div>`;
            itemContainer.innerHTML += card;
        });
        
        
        // Render total price section
        priceContainer.innerHTML = `
        <h3 class="border-bottom border-2 p-3" style="background-color:whitesmoke;">Order Summery </h3>
            <section class="ps-2 pe-2 pb-2 pt-2">
                <div class="d-flex">
                    <div>
                        <div>Total Products (${cart.length})</div>
                        <div>Shipping</div>
                        <div>Total Amount</div>
                    </div>
                    <div class="ms-5 text-end ps-5">
                        <div>$${totalPrice}</div>
                        <div>$30</div>
                        <div>$${totalPrice + 30}</div>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <button class="btn btn-dark ps-5 pe-5">Go to Checkout</button>
                </div>
            </section>`;
    } else {
        document.getElementById('emptyCart').style.display = 'block';
        document.getElementById('SelectedItems').style.display = 'none';
    }
}

function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += 1;  // Increase quantity by 1
    localStorage.setItem('cart', JSON.stringify(cart));  // Update localStorage
    displayProducts();  // Refresh display
}

function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;  // Decrease quantity by 1
    } else {
        cart.splice(index, 1);  // Remove item if quantity is 1
    }
    localStorage.setItem('cart', JSON.stringify(cart));  // Update localStorage
    displayProducts();  // Refresh display
}

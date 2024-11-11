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
        let data = await response.json();
        productContainer.innerHTML = '';
        data.forEach(col => {
            let card = `
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length > 10 ? col.title.slice(0, 10) + '...' : col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$' + col.price}</p>
                        <hr>
                        <div class="align-content-center">
                            <button class="btn btn-dark">Details</button>
                            <button class="btn btn-dark" onclick="addToCart(${col.id})">Add to Cart</button>
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
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(item => item.id === productId);

    if (product) {
        product.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
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
        filteredData.forEach(col => {
            let card = `
                <div class="col-md-4 mb-4">
                    <div class="card text-center">
                        <img src="${col.image}" alt="Product Image" style="width:100%;height:400px" />
                        <div class="fs-4">${col.title.length > 10 ? col.title.slice(0, 10) + '...' : col.title}</div>
                        <div>${col.description.length > 100 ? col.description.slice(0, 100) + '...' : col.description}</div>
                        <hr>
                        <p>${'$' + col.price}</p>
                        <hr>
                        <div class="align-content-center">
                            <button class="btn btn-dark">Details</button>
                            <button class="btn btn-dark" onclick="addToCart(${col.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>`;
            productContainer.innerHTML += card;
        });
    } catch (error) {
        console.error('Error filtering products:', error);
    }
}



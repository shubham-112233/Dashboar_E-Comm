


let allProducts = [];
let categories = new Set();



async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    allProducts = products;

    // Store unique categories
    products.forEach(product => categories.add(product.category));

    displayCategories();
    displayProducts(products);
}

// ✅ Function to display category buttons dynamically
function displayCategories() {
    const categoryContainer = document.getElementById('category-btn');
    categoryContainer.innerHTML = `<button class ="dtn" onclick="filterProducts('all')">All</button>`;
    // document.getElementsByClassName('dtn').style.display="width:100%";

    categories.forEach(category => {
        let categoryID = category.replace(/[^a-zA-Z0-9]/g, ""); // Remove special characters
        categoryContainer.innerHTML += `<button  class ="dtn" onclick="filterProducts('${categoryID}')">${category}</button>`;
    });
}

// ✅ Function to display products
function displayProducts(products) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = "product-card";
        card.onclick = function() {
            showModal(product.image, product.title, product.price, product.category);
        };
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>${product.category}</p>
            <button>Add To Cart</button>
        `;
        container.appendChild(card);
    });
}

// ✅ Function to filter products by category
function filterProducts(category) {
    let filteredProducts = allProducts.filter(product =>
        product.category.replace(/[^a-zA-Z0-9]/g, "") === category || category === "all"
    );
    displayProducts(filteredProducts);
}

// ✅ Show product details in modal
function showModal(image, title, price, category) {
    document.getElementById('modal-image').src = image;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-price').innerText = `$${price}`;
    document.getElementById('modal-category').innerText = category;
    document.getElementById('modal').style.display = "flex";
}

// ✅ Close modal
function closeModal() {
    document.getElementById('modal').style.display = "none";
}

// Fetch products when page loads

function sortProducts(){
    const selectoption=document.getElementById("sort").value;
    let sortedProducts=[...allProducts];

    switch(selectoption){
        case 'highTolow':
        sortedProducts.sort((a,b)=>b.price-a.price);
        break;
        
        case'LowToHigh':
        sortedProducts.sort((a,b)=>a.price-b.price);
        break;

        case'AToZ':
        sortedProducts.sort((a,b)=>a.title.localeCompare(b.title));
        break;
        
        case'ZToA':
        sortedProducts.sort((a,b)=>b.title.localeCompare(a.title));
        break
        
    }
  
                
            
        // break;
        




    

// console.log(sortedProducts);
displayProducts(sortedProducts);
}

function showProducts(){
    let  category=document.getElementById('category').style.display="block";
    console.log(category);
    //  let container=document.getElementById('conatainer').style.display="block";
}
function showUsers(){

    
    fetchProducts();

    

}


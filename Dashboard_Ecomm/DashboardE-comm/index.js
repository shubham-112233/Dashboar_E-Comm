let allProducts =[];


async function fetchproducts() {
    const response=await fetch('https://fakestoreapi.com/products');
    const products=await response.json();
    allProducts=products;
    displayproducts(products);


    
}
var category = new Map();

function displayproducts(products){
    // console.log(typeof(products));

    const conatiner=document.getElementById('conatainer');
    conatiner.innerHTML='';
    products.forEach(product =>{
        console.log(product);
        if(category.has(product.category)){
            category.set(product.category,'1');

        }
        else{
            category.set(product.category,'1');
        }
        const card=document.createElement('div');
        card.className="product-card";
        card.innerHTML=` 
            <img src="${product.image}">
            <h3>${product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p> ${ product.category}</p>
            <button>Add to Cart</button>
        `;
        conatiner.appendChild(card);

    });
// console.log(category);
displayCategory(category);



}
function displayCategory(category){
    let conatainer=document.getElementById('category');
    html =`<div> <button onclick="filterProduct('all')">All </button> `;
    for (const [key,value] of category) {
        let ca=key.replace(/[^a-zA-Z0-9]/g,"");
        // console.log(ca);
        html += `<button onclick ="filterProduct('${ca}')"> ${key}</button>`;        
    }
    html +="</div>";
    conatainer.innerHTML=html;


}
function filterProduct(value){
    var filterProducts=[];
    allProducts.forEach(product =>{
        if(product.category.replace(/[^a-zA-Z0-9]/g,"") === value){
            filterProducts.push(product);
        }
        else if(value ==="all"){
            filterProducts.push(product);
            
        }
    });
    displayproducts(filterProducts);

}
fetchproducts();
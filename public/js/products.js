

//Get the type category from URL query params
const params = new URLSearchParams(window.location.search);

//use this url var to add query strings for filter and search;
let url='/api/products'

//gets all data, backend handles filtering and search
const fetchProducts=async()=>{
    const res=await fetch(url);

    const data= await res.json();
    const itemsSection = document.getElementById('items');
    itemsSection.replaceChildren();
    
    data.forEach(element => {
        const anchor = document.createElement('a');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const btn= document.createElement('button');

        img.src = `/images/products/${element.id}.png`;
        img.alt = "photo";
        div.appendChild(img);

        h4.textContent = element.name;
        div.appendChild(h4);

        p.textContent = "$"+element.price;
        div.appendChild(p);
        
        btn.textContent = "Add to Cart";
        btn.dataset.id = element.id
        btn.addEventListener('click', addToCart);
        btn.classList.add('add-to-cart-btn');
        div.appendChild(btn);

        anchor.href = "/products/"+element.id;
        anchor.appendChild(div);


        itemsSection.appendChild(anchor);
    });

}

fetchProducts();


//filters
const minPrice= document.querySelector('#minPrice');
const maxPrice= document.querySelector('#maxPrice');
const filterBtn= document.querySelector('#filterBtn');

const applyFilters = () => {
    let filterUrl = '/api/products?';
    
    const category = getSelectedCategory();
    // Add type if it exists
    if (category) {
        filterUrl += `type=${category}&`;
    }
    
    // Add price filters
    filterUrl += `minPrice=${minPrice.value}&maxPrice=${maxPrice.value}`;

    url = filterUrl;
    fetchProducts();
    
}
filterBtn.addEventListener('click',applyFilters);

const validateInputs=()=>{
    if(minPrice.value<0) minPrice.value=0;
    const min = Number(minPrice.value);
    const max = Number(maxPrice.value);
    // Should be validation here for 0, but since 0 is
    // also null it's either a "both or none" problem.
    if(max < min && max !== 0) {
        maxPrice.value = min + 1;
    }
}
minPrice.addEventListener('change',validateInputs);
maxPrice.addEventListener('change',validateInputs);


const addToCart=async(e)=>{
    e.preventDefault();
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    const addCart = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id })
    });

}


function getSelectedCategory() {
    if (document.getElementById("football").checked) return "football";
    if (document.getElementById("basketball").checked) return "basketball";
    if (document.getElementById("baseball").checked) return "baseball";
    if (document.getElementById("hockey").checked) return "hockey";
    if (document.getElementById("soccer").checked) return "soccer";
    return null;
}
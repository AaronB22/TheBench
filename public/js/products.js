//Get the type category from URL query params
const params = new URLSearchParams(window.location.search);
const selectedType = params.get('type');

//use this url var to add query strings for filter and search;
let url='/api/products'

// Add type parameter if it exists in the URL
if (selectedType) {
    url += `?type=${selectedType}`;
}


//gets all data, backend handles filtering and search
const fetchProducts=async()=>{
    const res=await fetch(url);

    const data= await res.json();
    const itemsSection = document.getElementById('items');
    itemsSection.replaceChildren();
    let maxItemPrice=0;
    data.forEach(element => {
        const anchor = document.createElement('a');
        const div = document.createElement('div');
        const img = document.createElement('img');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');

        img.alt = "photo";
        div.appendChild(img);

        h4.textContent = element.name;
        div.appendChild(h4);

        p.textContent = "$"+element.price;
        div.appendChild(p);

        anchor.href = "#";
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
    
    // Add type if it exists
    if (selectedType) {
        filterUrl += `type=${selectedType}&`;
    }
    
    // Add price filters
    filterUrl += `minPrice=${minPrice.value}&maxPrice=${maxPrice.value}`;
    
    url = filterUrl;
    fetchProducts();
    
}
const applyFilters=()=>{
    url=`/api/products?minPrice=${minPrice.value}&maxPrice=${maxPrice.value}`;
    fetchProducts(); 
}
filterBtn.addEventListener('click',applyFilters);

const validateInputs=()=>{
    if(minPrice.value<0) minPrice.value=0;
    if((maxPrice.value<minPrice.value)&&(maxPrice.value&&minPrice.value)) maxPrice.value=Number(minPrice.value)+1;
    
}
minPrice.addEventListener('change',validateInputs);
maxPrice.addEventListener('change',validateInputs);

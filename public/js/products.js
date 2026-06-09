//use this url var to add query strings for filter and search;
let url='/api/products'


//gets all data, backend handles filtering and search
const fetchProducts=async()=>{
    const res=await fetch(url);

    const data= await res.json();
    const itemsSection = document.getElementById('items');
    itemsSection.replaceChildren();
    let maxItemPrice=0;
    data.forEach(element => {
        const div = document.createElement('div');
        div.textContent = element.name;
        itemsSection.appendChild(div);
    });

}

fetchProducts();


//filters
const minPrice= document.querySelector('#minPrice');
const maxPrice= document.querySelector('#maxPrice');
const filterBtn= document.querySelector('#filterBtn');
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

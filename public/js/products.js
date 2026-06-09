//use this url var to add query strings for filter and search;
let url='/api/products'
//gets all data, backend handles filtering and search
const fetchProducts=async()=>{
    const res=await fetch(url);

    const data= await res.json();
    
    data.forEach(element => {
        const div = document.createElement('div');
        div.textContent = element.name;
        document.getElementById('items').appendChild(div);
    });
}

fetchProducts();


//filters
const minPrice= document.querySelector('#minPrice');
const maxPrice= document.querySelector('#maxPrice');

const applyFilters=(filterType, filterValue)=>{
    console.log("changing values")
    url+=`${filterType}=${filterValue}`
    
}

minPrice.addEventListener('change', ()=> applyFilters("minPrice", minPrice.value));
maxPrice.addEventListener('change', () => applyFilters("maxPrice", maxPrice.value))
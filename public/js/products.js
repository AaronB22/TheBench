//use this url var to add query strings for filter and search;
let url='/products'
//gets all data, backend handles filtering and search
const fetchProducts=async()=>{
    const res=fetch(url);
    const data= await res.json();

}
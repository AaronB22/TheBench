const fetchCart=async()=>{
    const res = await fetch('/api/cart')
    const data= await res.json();
    console.log(data);
}

fetchCart();


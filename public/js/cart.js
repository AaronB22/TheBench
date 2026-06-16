const fetchCart=async()=>{
    const res = await fetch('/api/cart/test')
    const data= await res.json();
    console.log(data);
    const cartSection = document.getElementById("section-cart")
    cartSection.innerHTML = '';
    data.forEach(item => {
        cartSection.insertAdjacentHTML('beforeend', `
            <div class="cart-card">
                <h3>${item.name}</h3>
                <p>$${item.price}</p>
                <button class="remove-btn" data-id="${item.id}" onclick="deleteItem('${item.id}')">Remove</button>
            </div>
        `);
    });
}


fetchCart();


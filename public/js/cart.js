

const fetchCart = async () => {
    const res = await fetch('/api/cart/')
    const data = await res.json();

    buildCart(data);

}

const deleteItem = async (id) => {

    const res = await fetch(`/api/cart/${id}`, {
        method: "delete"
    })
    const data = await res.json();
    buildCart(data);
}

fetchCart();

const buildCart = (data) => {
    let total = 0;
    const cartSection = document.getElementById("section-cart");
    cartSection.innerHTML = '';
    const btn= document.getElementById("purchaseBtn");
    if (data.length ==0) {
        window.location.href = '/products';
        return;
    }
    data.forEach(item => {
        total+=Number(item.price)
        cartSection.insertAdjacentHTML('beforeend', `
        <div class="cart-card">
            <div class="cart-img-container"><img></div>
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button class="remove-btn" data-id="${item.id}" onclick="deleteItem('${item.id}')">Remove</button>
        </div>
`);
    });

    const totalElement= document.getElementById("total");
    totalElement.textContent = `$${total.toFixed(2)}`
}
const purchase = async()=> {
    await fetch('/api/cart', { method: 'delete' });
    location.href = '/confirmation';
}

document.querySelector('.purchaseCard button').addEventListener('click', purchase);
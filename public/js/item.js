const path = window.location.pathname.split('/');
const id = path[2];

let url='/api/products/'+id;

const fetchItem=async()=>{

    const res=await fetch(url);
    console.log(res);
    const element = await res.json();
    console.log(element);


    const itemSection = document.getElementById('item');
    itemSection.replaceChildren();

    const img = document.createElement('img');
    const h1 = document.createElement('h1');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');
    const btn = document.createElement('button');

    img.alt = "photo";
    itemSection.append(img);

    h1.textContent = element.name;
    itemSection.append(h1);

    h4.textContent = "$"+element.price;
    itemSection.append(h4);
    btn.textContent = "Add to Cart";
    btn.dataset.id = element.id
    btn.addEventListener('click', addToCart);
    btn.classList.add('add-to-cart-btn');
    p.textContent = element.type;
    itemSection.append(p);
    itemSection.append(btn);

}

fetchItem();

const addToCart = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    const addCart = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id })
    });

}
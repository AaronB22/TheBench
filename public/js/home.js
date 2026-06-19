const getFeaturedProducts = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    buildFeatured(data)
}

getFeaturedProducts()


const buildFeatured = (product) => {
    const section = document.getElementById('featured-items');
    section.insertAdjacentHTML('beforeend', `
        <a href="/products/${product.id}">
            <div class="featured-card">
                <img src="images/products/${product.type}.png" alt="${product.name}" width=100%>
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
            </div>
        </a>
    `);
}
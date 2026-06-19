const getFeaturedProducts = async () => {
    const id = Math.floor(Math.random() * 100) + 1;
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    console.log(data)
}

getFeaturedProducts()
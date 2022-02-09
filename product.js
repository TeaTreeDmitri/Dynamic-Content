const urlParams = new URLSearchParams(window.location.search);
const id = (urlParams.get("id"));


const url = "https://kea-alt-del.dk/t7/api/products/" + id;

//fetch the data
fetch(url)
    .then(res => res.json())
    .then(data => showProduct(data));

//populate the page 
function showProduct(product) {
    console.log(product);
    document.querySelector(".info .brandName").textContent = product.brandname;
    document.querySelector(".brandBio").textContent = product.brandbio;
    document.querySelector(".productName").textContent = product.productdisplayname;
    document.querySelector("dd:nth-child(2)").textContent = product.productdisplayname;
    document.querySelector("dd:nth-child(4)").textContent = product.basecolour;
    document.querySelector("dd:nth-child(6)").textContent = product.id;
    document.querySelector(".productImage").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;

} 
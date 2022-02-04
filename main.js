const url = "https://kea-alt-del.dk/t7/api/products/1163"

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
    document.querySelector(".productImage").src = "https://kea-alt-del.dk/t7/images/jpg/640/1163.jpg";
    // document.querySelector(".descriptionList").textContent = product. ;
    // document.querySelector("").textContent = product. ;
    // document.querySelector("").textContent = product. ;
    // document.querySelector("").textContent = product. ;
    // document.querySelector("").textContent = product. ;
    // document.querySelector("").textContent = product. ;
}
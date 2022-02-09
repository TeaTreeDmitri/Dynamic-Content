const urlParams = new URLSearchParams(window.location.search);
// const query = urlParams.get("q");
const id = (urlParams.get('id'));


const url = "https://kea-alt-del.dk/t7/api/products/";

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        handleProductList(data);
    })

function handleProductList(data){

    data.forEach(showProduct);
}
//       <template id="smallProductTemplate">
// <article class="smallProduct normRetail">
// <img
//   src="/Assets/Images/pexels-konstantin-mishchenko-1926769.jpeg"
//   alt="..."
// />
// <p class="discount">Reduced! Now only <span>88</span> dkk</p>
// <a href="product.html">Read More</a>
// </article>
// </template>

//.discounted .normRetail .soldOut

function showProduct(product){
    console.log(product);
    //grab the template
const template = document.querySelector("#smallProductTemplate").content;

const copy = template.cloneNode(true);

//change content 

copy.querySelector(".brandAndType").textContent = `${product.articletype} | ${product.brandname}`;
copy.querySelector(".longTitle").textContent = `${product.productdisplayname}`;
copy.querySelector(".price").textContent = `${product.price}`;
copy.querySelector(".productImage").src = `https://kea-alt-del.dk/t7/images/jpg/640/${product.id}.jpg`;

if(product.soldout){
    copy.querySelector("article").classList.add("soldOut");
}
if(product.discount){
    copy.querySelector("article").classList.add("discounted");
    copy.querySelector(".discount span").textContent = product.discount;

}


const parent = document.querySelector("main");

parent.appendChild(copy);
}
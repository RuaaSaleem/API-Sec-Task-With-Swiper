

async function GetProducts() {
  
    const response = await axios.get('https://dummyjson.com/products');
    const products=response.data.products;
    //const {title,price,brand ,thumbnail,description}=products;

    const result =products.map( function(product){

        return `
      
        <div class="product-card">
      
        <img  src=${product.thumbnail}>
       
        <span>${product.brand}</span>
        <h2>${product.title}</h2>
        <h3>${product.price} $ </h3>
        <a  href="details.html?product_id=${product.id}">More Details...</a>
        </div>
        ` ;

    }).join('');

    document.querySelector(".products-list").innerHTML=result;
}


GetProducts();


  async function GetImages(){
    const response = await axios.get('https://dummyjson.com/products');
    const products=response.data.products;

    console.log(products);
    const result =products.map( function(product){
        return `
        <div class="swiper-slide">
        <img  src=${product.thumbnail}>
        </div>
        ` ;
    }).join('');

    document.querySelector(".swiper-wrapper").innerHTML=result;


  
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

}

GetImages();
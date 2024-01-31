

async function GetDetails() {

    const urlParams=new URLSearchParams(window.location.search);
    const id=urlParams.get('product_id');
    console.log(id);
  
     await axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
       const product=response.data;
      
       document.querySelector(".title").textContent=product.title;
       
       document.querySelector("img").src=product.thumbnail;
     
       document.querySelector(".brand").textContent=product.brand;
       document.querySelector(".category").textContent=product.category;
       document.querySelector(".price").textContent +=product.price;
       document.querySelector(".desc").textContent=product.description;
    });
    
}

GetDetails();


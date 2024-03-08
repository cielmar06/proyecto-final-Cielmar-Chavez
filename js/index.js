

const bookshopContent= document.getElementById("bookshopContent")
const verCarrito=document.getElementById("verCarrito")
const modalContainer=document.getElementById("modalContainer")
const cantidadCarrito=document.getElementById("cantidadCarrito")

let carrito=  JSON.parse(localStorage.getItem("carrito"))|| [];

const getProducts = async ()=>{
  const response = await fetch("data.json")
  const data = await response.json()
 
data.forEach((product)=>{ 
  let content = document.createElement("div");
  content.className= "card"
  content.innerHTML=` <img src="${product.img}">
  <h3>${product.nombre}</h3>
  <h5>${product.autor}</h5>
  <p class="price">${product.precio}$</p>
  `;
  bookshopContent.append(content)
  let comprar = document.createElement("button")
  comprar.innerText="Añadir al carrito"
  comprar.className= "comprar"
  content.append(comprar);

  comprar.addEventListener("click", ()=>{
   const repeat= carrito.some((repeatProduct)=>repeatProduct.id === product.id)
   if(repeat){
     carrito.map((prod)=>{
       if(prod.id===product.id){
         prod.cantidad ++;
       }
     });
    } else{
   

   carrito.push({ 
     id:product.id,
     img: product.img,
     nombre:product.nombre,
     precio: product.precio,
     autor:product.autor,
     cantidad:product.cantidad,

   });
 }
   
   carritoCounter();
   guardarLocal();

  });
  
 

  })
}
getProducts();

   //local storage carrito
   const guardarLocal=()=>{
localStorage.setItem("carrito", JSON.stringify (carrito));}



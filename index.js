//const getProductos= async ()=>{
  //  const response= await fetch("data.json")
    //const data= awaitresponse.json();
    //console.log(data)
//};
//getProductos();

const bookshopContent= document.getElementById("bookshopContent")
const CarroLink=document.getElementById("CarroLink")
const modalContainer=document.getElementById("modal-container")
let carrito=[];

productos.forEach((product)=>{ 
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
    carrito.push({ id:product.id,
      img: product.img,
      nombre:product.nombre,
      precio: product.precio,
      autor:product.autor,

    });
    
    console.log(carrito);

   });
   
  

   })
   CarroLink.addEventListener("click", ()=>{
    const modalHeader= document.createElement("div")
    modalHeader.className="modal-header"
    modalHeader.innerHTML=` <h1 class="modal-header-title">Carrito.</h1>`;
    modalContainer.append(modalHeader);
    const modalbutton=document.createElement("h1");
    modalbutton.innerText= "x";
    modalbutton.className= "modal-header-button";

    modalHeader.append(modalbutton);

});



/*
Agregar items a carrito de compras
*/

function addToCart(id){
    iziToast.success({
        title: 'Agregado',
        message: 'Producto agregado al carrito',
    });
    updateCart();
}

function updateCart()
{
  let cart_count = document.getElementById('cart_count');
  cart_count.innerHTML = parseInt(cart_count.innerHTML) + 1;
}

function addToFavorite()
{
  iziToast.success({
    title: 'Agregado',
    message: 'Producto agregado a favoritos',
  });
}
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    // Buscar el producto en el array products
    let newProduct = products.find(product => product.id === id);
    
    if (newProduct) {
        // Verificar si el producto ya está en el carrito
        let productCart = cart.findIndex(productInCart => productInCart.id === newProduct.id);

        if (productCart !== -1) {
            // El producto ya está en el carrito, actualiza la cantidad
            cart[productCart].quantity += 1;
            console.log("Cantidad del producto incrementada en el carrito");
        } else {
            // El producto no está en el carrito, agrégalo con cantidad 1
            cart.push({ ...newProduct, quantity: 1 });
            console.log("Producto agregado al carrito");
        }
        console.log(cart);
    } else {
        console.log("Producto no encontrado");
    }   
    applyPromotionsCart(); 
    calculateTotal(); 
    printCart();    
}



// Exercise 2

function cleanCart() {
    cart = [];
    console.log("Carrito vaciado");
    console.log(cart);    
    printCart();
}


// Exercise 3

function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];
        total += (product.subtotalWithDiscount || (cart[i].price * cart[i].quantity));
    }

    console.log("Total del carrito: " + total.toFixed(2) + " €");
    
    return total;    
}



// Exercise 4

// function applyPromotionsCart() {
//     // Apply promotions to each item in the array "cart"

//     for (let i = 0; i < cart.length; i++) {
//         let product = cart[i];

//         // Promoción 1: Descuento del 20% en el precio del producto si se compran 3 o más ampolletas d'oli
//         if (product.id === 1 && product.quantity >= 3) {
//             let discount = product.price * 0.20;
//             product.subtotalWithDiscount = (product.price - discount) * product.quantity;
//         } else if (product.id === 1) {
//             product.subtotalWithDiscount = undefined; // No hay descuento
//         }

//         // Promoción 2: Descuento del 30% en el precio del producto si se compran 10 o más productes per a fer pastissos
//         if (product.id === 3 && product.quantity >= 10) {
//             let discount = product.price * 0.30;
//             product.subtotalWithDiscount = (product.price - discount) * product.quantity;
//         } else if (product.id === 3) {
//             product.subtotalWithDiscount = undefined; // No hay descuento
//         }
//     } 
//     console.log("Promociones aplicadas:", cart);
// }

// Version reutilizable ( corrección )

function applyPromotionsCart() {
    
    for (let i = 0; i < cart.length; i++) {
        let product = cart[i];    
        
        if (product.offer && product.quantity >= product.offer.number) {
            
            // Aplicar descuento según la regla de promoción
            let discount = (product.offer.percent/100) * product.price;
            product.subtotalWithDiscount = (product.price - discount) * product.quantity;
            

        } else {
            // No hay descuento
            product.subtotalWithDiscount = undefined;            
        }
    };

    console.log("Promociones aplicadas:", cart);
}




// Exercise 5

function printCart() {    
    // Fill the shopping cart modal manipulating the shopping cart dom

    let cartList = document.getElementById('cart_list');
    cartList.innerHTML = ''; // Limpiamos el contenido actual de la lista del carrito

    cart.forEach(product => {
        let productoElement = document.createElement('tr');
        productoElement.innerHTML = `
            <th scope="row">${product.name}</th>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>$${(product.subtotalWithDiscount || (product.price * product.quantity)).toFixed(2)}</td>
            <td><button class="btn btn-danger shadow" onclick="removeFromCart(${product.id})">Remove</button></td>
            
        `;
        cartList.appendChild(productoElement);
    });

     // Obtén el elemento con el id "count_product"
     let countProductElement = document.getElementById('count_product');

     // Actualiza el contenido con la cantidad de productos en el carrito
     countProductElement.textContent = cart.reduce((total, product) => total + product.quantity, 0);
 

    // Mostrar el total del carrito
    let totalElement = document.getElementById('total_price');
    totalElement.textContent = calculateTotal().toFixed(2);    
}



// ** Nivell II **

// Exercise 7

function removeFromCart(productId) {
    
     // Buscar el producto en el carrito por su identificador
     let productIndex = cart.findIndex(product => product.id === productId);

     if (productIndex !== -1) {
         // Reducir la cantidad del producto en una unidad
         cart[productIndex].quantity -= 1;
         
 
         // Si la cantidad llega a 0, eliminar el producto del carrito
         if (cart[productIndex].quantity === 0) {
             cart.splice(productIndex, 1);
         }        

        // Actualizar las promociones después de modificar el carrito        
        applyPromotionsCart();

        // Actualizar el contenido del carrito en el DOM
        printCart();
  
     } else {
         console.log("Producto no encontrado en el carrito");
     }
}

function open_modal() {
    printCart();
}
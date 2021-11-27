export const getCart = () => {
    return new Promise((resolve, reject) => {
        const cart = window.localStorage.getItem('cart');
        resolve(cart) ;
    })

    // const cart = window.localStorage.getItem('cart');
    // return cart;
}

export const storeCart = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
}



// export const getCart = () => {
//     //return new Promise((resolve, reject) => {
//         const cart = window.localStorage.getItem('cart');
//         console.log('helper', cart);
//         //resolve(cart);
//         console.log('helper2', cart);
//     //}
//     //)
// }

// export const storeCart = (cart) => {
//     window.localStorage.setItem('cart', JSON.stringify(cart));
// }
//import Singleton from "./singleton";

export function fetchInventory() {
    fetch('http://autumn-resonance-1298.getsandbox.com/inventory')
        .then(function (response) {
            return response.json();
        })
        .then(function (inventory) {
            console.log(inventory);
            //Singleton.getInstance().setVar(inventory);
        });
}
export function fetchProducts() {
    fetch('http://autumn-resonance-1298.getsandbox.com/products')
        .then(function (response) {
            return response.json();
        })
        .then(function (products) {
            console.log(products);
            export var productsJSON = products;
        });
}

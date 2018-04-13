
export function fetchInventory() {
    return fetch('http://autumn-resonance-1298.getsandbox.com/inventory')
        .then(response => response.json())
        .then(function (inventory) {
            console.log(inventory);
        });
}

export function fetchProducts() {
    return fetch('http://autumn-resonance-1298.getsandbox.com/products')
        .then(response => response.json())
        .then(function (products) {
            console.log(products);
        });
}

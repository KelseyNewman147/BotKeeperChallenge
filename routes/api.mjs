import url from "url";import URLSearchParams from "url-search-params";

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

export function fetchInventoryItem(name) {
    var url = new URL("http://autumn-resonance-1298.getsandbox.com/inventory"); 
        url.search = new URLSearchParams(name)
    return fetch(url)
        .then(response => response.json())
        .then(function (inventory) {
            console.log(inventory);
        });
}

export function fetchProduct(name) {
    var url = new URL("http://autumn-resonance-1298.getsandbox.com/products");
        url.search = new URLSearchParams(name)
    return fetch(url)
        .then(response => response.json())
        .then(function (products) {
            console.log(products);
        });
}

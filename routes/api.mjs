import url from "url";import URLSearchParams from "url-search-params";
import superagent from "superagent";

export async function fetchInventory() {
    try {
        return await superagent.get('http://autumn-resonance-1298.getsandbox.com/inventory')
            .then(function (inventory) {
                console.log(inventory.body);
                return inventory.body;
            });
    } catch (error) {
        return error;
    }
}

export async function fetchProducts() {
    try {
        return await superagent.get('http://autumn-resonance-1298.getsandbox.com/products')
            .then(function (products) {
                console.log(products.body);
                return products.body;
            });
    } catch (error) {
        return error;
    }
}

export function fetchInventoryItem(name) {
    url = new URL("http://autumn-resonance-1298.getsandbox.com/inventory/"); 
        url.search = new URLSearchParams(name)
    return fetch(url)
        .then(response => response.json())
        .then(function (inventory) {
            console.log(inventory);
        });
}

export function fetchProduct(name) {
    var url = new URL("http://autumn-resonance-1298.getsandbox.com/products" + name);
        //url.search = new URLSearchParams(name)
    return fetch(url)
        .then(response => response.json())
        .then(function (products) {
            console.log(products);
        });
}

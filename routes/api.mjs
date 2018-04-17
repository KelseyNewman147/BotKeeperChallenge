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

export async function fetchInventoryItem(name) {
    try {
        return await superagent.get('http://autumn-resonance-1298.getsandbox.com/inventory/' + name)
            .then(function (inventoryItem) {
                console.log(inventoryItem.body);
                return inventoryItem.body;
            });
    } catch (error) {
        return error;
    }
}

export async function fetchProduct(name) {
    try {
        return await superagent.get('http://autumn-resonance-1298.getsandbox.com/products/' + name)
            .then(function (product) {
                console.log(product.body);
                return product.body;
            });
    } catch (error) {
        return error;
    }
}

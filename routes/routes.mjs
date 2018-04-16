import "isomorphic-fetch";import "superagent";import { fetchInventory, fetchProducts, fetchInventoryItem, fetchProduct } from "./api.mjs";

var itemsArr = [];
var productsArr = [];
fetchInventory().then(inventory => {
    console.log("inventory:" + JSON.stringify(inventory));
    itemsArr = inventory.inventory;
    return itemsArr;
});
fetchProducts().then(products => {
    console.log("products:" + JSON.stringify(products));
    productsArr = products.map(p => p.price);
    return productsArr;
});

var appRouter = function (app) {
    app.get("/", function(req,res) {
        res.status(200).send("Welcome to my RESTful API!");
    });

    app.get("/products", function (req,res) {
        var items = [];
        var count = itemsArr.length;
        for(var i = 0; i < count; i++) {
            items.push({
                name: itemsArr[i].name,
                inventory: itemsArr[i].inventory,
                price: productsArr[i]
            });
        }
        res.status(200).send(items);
    })

    app.get("/products/:name", function (req,res) {
        var item;
        var name = req.params.name;
        fetchInventoryItem(name);
        var found = false;
        // for(var i = 0; i < itemsArr.length; i++) {
        //     if (itemsArr[i].name == name) {
        //         found = true;
        //         break;
        //     }
        // }
         if (found) {
        //     var inv = itemsArr.find(function(element) {
        //         return element.name == name;
        //     });
        //     var prod = productsArr.find(function(element) {
        //         return element.name == name;
        //     });
        //     item = {
        //         name: inv.name,
        //         price: prod.price,
        //         inventory: inv.inventory
        //     };
    
            res.status(200).send(item);
        } else {
            res.status(400).send('That product does not exist!');

        }
    });
}

export default appRouter;

import "isomorphic-fetch";import { fetchInventory } from "./api.mjs";


fetchInventory().then(inventoryJSON => {
    var itemsArr = JSON.parse(inventoryJSON);
    return itemsArr;
});

var appRouter = function (app) {
    app.get("/", function(req,res) {
        res.status(200).send("Welcome to our RESTful API!");
    });

    app.get("/products", function (req,res) {
        var items = [];
        var count = itemsArr.length;
        for(i=0; i <= count-1; i++) {
            items.push({
                name: i.name,
                inventory: i.inventory
            });
        }
        res.status(200).send(items);
    })
}

export default appRouter;

// function fetchInventory() {
//     var itemsArr = JSON.parse(inventoryJSON);
//     return itemsArr;
// }

require('isomorphic-fetch');

var inventory = fetch('http://autumn-resonance-1298.getsandbox.com/inventory')
    .then(function(response) {
        return response.json();
    })
    .then(function(inventory){
        console.log(inventory);
    }); 

var products = fetch('http://autumn-resonance-1298.getsandbox.com/products')
    .then(function(response) {
        return response.json();
    })
    .then(function(products){
        console.log(products);
    });      
    
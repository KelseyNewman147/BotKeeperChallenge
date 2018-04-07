require('isomorphic-fetch');

fetch('http://autumn-resonance-1298.getsandbox.com/inventory')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson){
        console.log(myJson);
    });
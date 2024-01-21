document.addEventListener('DOMContentLoaded', function () {
    
    
    let data = sessionStorage.getItem("passedparam");
    function getProductsForSupplier(supplierName) {
       
        const products = {
            'NIKE': [
                { id: 1, name: 'shoes',Quantity :'40', Total_cost: 95000 },
                { id: 2, name: 'upper',Quantity :'50', Total_cost: 81550 },
                { id: 3, name: 'lower',Quantity :'75', Total_cost: 34400 },
                { id: 4, name: 'trackuit',Quantity :'40', Total_cost: 32550 },
               
            ],
            'PUMA': [
                { id: 1, name: 'shoes', Quantity :'40',Total_cost: 12300 },
                { id: 2, name: 'upper',Quantity :'80', Total_cost: 15350 },
                { id: 3, name: 'lower',Quantity :'30', Total_cost: 81009 },
                { id: 4, name: 'tracksuit',Quantity :'60', Total_cost: 16507 },
            ],
            'SKECHERS': [
                { id: 1, name: 'shoes', Quantity :'30',Total_cost: 22300 },
                { id: 2, name: 'upper',Quantity :'40', Total_cost: 75350 },
                { id: 3, name: 'lower',Quantity :'50', Total_cost: 91009 },
                { id: 4, name: 'tracksuit',Quantity :'60', Total_cost: 16507 },
            ],
        };


        
    
        return products[supplierName] || [];
    }
console.log(data);    
const productDetails = getProductsForSupplier(data);
//idhar barabar se pass kiya hai n??

   
    const productDetailsElement = document.getElementById('product-details');
    productDetails.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h2>${product.name}</h2>
            <p>Product ID: ${product.id}</p>
        
            <p>Quantity: ${product.Quantity}</p>
            <p>Cost: ${product.Total_cost}</p>
        `;
        productDetailsElement.appendChild(productElement);
    });


});
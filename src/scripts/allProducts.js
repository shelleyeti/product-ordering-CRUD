import apiManager from "./dbCalls"

//displays all product information
const productAllObj = {
    //builds html for all products
    getProductHTML:() => {
        return apiManager.getAllProductInfo()
        .then((products) => {
            let productAllHTML = "";
            products.forEach(product => {
                productAllHTML += `<div>
                <a href="#" class="productCard" data-id=${product.id}>
                Item: ${product.title} <br>
                Discription: ${product.discription} <br> 
                Price: ${product.price} <br> 
                Quantity Available: ${product.quantity} <br>
                </a>
                </div>`
            });
            return productAllHTML;
        })
    }
};

export default productAllObj
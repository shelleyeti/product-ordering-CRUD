import apiManager from "./dbCalls"

//displays one product information
const productObj = {
    getOneProduct: (productId) => {
        return apiManager.getOneProduct(productId)
        .then((product)=>{
            let productOneHTML = "";
            productOneHTML += `<div>
            <a href="#" class="productCard" data-id=${product.id}>
            Item: ${product.title} <br>
            Discription: ${product.discription} <br>
            Price: ${product.price} <br>
            Quantity Available: ${product.quantity} <br>
            </a>
            </div>`;
            return productOneHTML;
        })
    }
}


export default productObj
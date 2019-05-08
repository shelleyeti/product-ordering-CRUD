import productObj from "./product"


//builds html for Product edit form
const editProduct = {
    getProductHTML:(productId) => {
        return productObj.getOneProduct(productId).then((product) => {
            return `<div> 
            <form>
                <label for="editForm">Edit Product</label> <br>
                First name: <input class="editFirstName" value="${product.title}" type="text" name="fname"><br>
                Last name: <input class="editLastName" value="${product.discription}" type="text" name="lname"><br>
                Address: <input class="editAddress" value="${product.price}" type="text" name="fname"><br>
                Phone: <input class="editPhone" value="${product.quantity}" type="text" name="lname"><br>
            </form>
            <button class="updateButton">Update</button>
            <hr> </div>`
        })
    },
    //builds html for add new product form
    createNewProduct:() => {
            return `<div> 
            <form>
                <label for="createForm">Create Product</label> <br>
                First name: <input class="editFirstName" value="" type="text" name="fname"><br>
                Last name: <input class="editLastName" value="" type="text" name="lname"><br>
                Address: <input class="editAddress" value="" type="text" name="fname"><br>
                Phone: <input class="editPhone" value="" type="text" name="lname"><br>
            </form>
            <button class="createNewButton">Create</button>
            <hr> </div>`
    },
}

export default editProduct
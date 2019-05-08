import productAllObj from "./allProducts"
import productObj from "./product"
import apiManager from "./dbCalls"

const outElAll = document.querySelector(".outputAll");
const outEl = document.querySelector(".output");

const buildHTML = {
    buildAllProductForm: () => {
        //db call to get products, then building html
        productAllObj.getProductHTML()
            //then put html on page
        .then(productElement => {
            outElAll.innerHTML = productElement;

            document.querySelectorAll(".productCard").forEach(productCard =>{
                productCard.addEventListener("click", (event) => {
                    event.preventDefault();
                    buildHTML.buildOneProductForm(event.target.dataset.id);
                });
            })
        });
    },
    buildOneProductForm: (productId) => {
        productObj.getOneProduct(productId)
        .then(productElement => {
            outEl.innerHTML = productElement
        });
    }

}

export default buildHTML
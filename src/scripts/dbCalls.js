const apiBaseURL = "http://localhost:8088"

const apiManager = {
    getAllProductInfo: () => {
        return fetch(`${apiBaseURL}/productInfo`)
          .then(response => response.json());
    },
    getOneProduct: (productId) => {
        return fetch(`${apiBaseURL}/productInfo/${productId}`)
            .then(response => response.json())
            //.then(parsedResult => {
            //console.log("one product", parsedResult);
            //});
    },
    updateProduct: (productId, productObj) => {
        return fetch (`${apiBaseURL}/productInfo/${productId}`,
            {
                method:"PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(productObj)
            })
         .then(response => response.json())
         .then(parsedResult => {
            console.log("updated product", parsedResult);
            })
    },
    makeProduct: (productObj) => {
        return fetch(`${apiBaseURL}/productInfo/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productObj)
            })
        .then(response => response.json())
        .then(parsedResult => {
            console.log("new product", parsedResult);
            });
    },
    deleteProduct: (productId) => {
      return fetch(`${apiBaseURL}/productInfo/${productId}`,
        {
            method: "DELETE"
        })
    }
}

export default apiManager
// Add product
export function addProduct(product){
    return{
        type: 'ADD_PRODUCT',
        product
    }
}

// update product
export function updateProduct(productId,product){
    return{
        type: 'UPDATE_PRODUCT',
        product,productId
    }
}

// get products
export function getProducts(){
    return{
        type: 'GET_ALL_PRODUCTS'

    }
}

// get product by id
function getProductById(productId){
    return{
        type: 'GET_PRODUCT_BY_ID',
        productId
    }
}

// update prices
export function updatePrices(prices,productId){
    return{
        type: 'UPDATE_PRICES',
        prices,productId
    }
}

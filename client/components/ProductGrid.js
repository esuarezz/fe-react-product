import React from 'react';

import ProductSingle from './ProductSingle'
const ProductLayout = React.createClass({
    render() {
        return (
            <div className="product-grid">
                <figcaption>
                    <div className="control-buttons">
                        <button className="button" onClick={console.log("wowoowowo")} > ADD </button>
                    </div>
                </figcaption>

                <pre>
                    {this.props.products.map((products,i) => <ProductSingle {...this.props}
                           key={i} i={i} products={products}/>)}
                </pre>

            </div>



        )
    }
});

export default ProductLayout;

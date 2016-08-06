import React from 'react';
import {Link} from 'react-router';
const ProductSingle = React.createClass({

    /*Inside Link div, it would be great to put the image of the product,
     so we can see after link the total info*/
    render(){
        return(
            <figure className="grid-figure">
                <div className="grid-product-wrap">
                    <Link to={`/details/${this.props.products.id}`}>
                         {this.props.products.name}
                    </Link>

                </div>
            </figure>
        )
    }
});

export default ProductSingle;
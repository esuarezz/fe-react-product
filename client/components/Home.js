import React from 'react';
import { Link } from 'react-router';

const Home = React.createClass({
    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Product Consumer </Link>
                    {React.cloneElement(this.props.children, this.props)}
                    </h1>
            </div>
        )
    }
});

export default Home;
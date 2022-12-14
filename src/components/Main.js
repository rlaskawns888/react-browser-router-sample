import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <h2>Hello world</h2>
            <p><Link to="/product/1">product 1</Link></p>
            <p><Link to="/product/2">product/2</Link></p>
        </>
    );
}

export default Main;
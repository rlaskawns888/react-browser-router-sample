import { Link, useParams } from "react-router-dom";

function Product() {
    const { prdNum } = useParams();
    return (
        <>
            <p>Product page {prdNum}</p>
            <Link to="/">main</Link>
        </>
    );
}

export default Product;
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { CatalogItemView } from "./CatalogItemView";

export const CatalogView = ({handler}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts());
    }, []);
    return (
        <>
            <div className="row g-2">
                {
                    products.map((product) => {
                        return (
                            <div className="col-4" key={product.id}>
                                <CatalogItemView
                                    handler={handler}
                                    id={product.id}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
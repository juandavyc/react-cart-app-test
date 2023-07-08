
import { NavBar } from "./components/NavBar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routes/CartRoutes";

export const CartApp = () => {


    const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart();

    return (
        <>
            <NavBar />
            <div className="container mt-2">
                <CartRoutes cartItems={cartItems} handlerAddProductCart={handlerAddProductCart} handlerDeleteProductCart={handlerDeleteProductCart} />
            </div>
        </>
    );
}
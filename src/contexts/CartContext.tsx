import React from "react";
import { categories as C, TProduct } from "../categories";

type TCartContext = {
    cart: TProduct[];
    setCart: React.Dispatch<React.SetStateAction<TProduct[]>>;
    handleSetProductToCart: (categoryId: number | null, productId: number | null) => void;
};

export const CartContext = React.createContext<TCartContext>({
    cart: [],
    setCart: () => { },
    handleSetProductToCart: (categoryId = null, productId = null) => { },
});

export const CartContextProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [cart, setCart] = React.useState<TProduct[]>([]);

    React.useEffect(() => {
        console.log(cart);
    }, [cart.length]);

    const handleSetProductToCart = React.useCallback((categoryId: number | null, productId: number | null) => {
        const category = C.find((category) => category.id === categoryId);
        if (!category) return;
        const product = category.data.find((product) => product.id === productId);
        if (!product) return;
        setCart((prevState) => ([...prevState, product]));
    }, [])

    const providerValue = React.useMemo(() => ({
        cart: cart,
        setCart: setCart,
        handleSetProductToCart: handleSetProductToCart
    }), [cart, setCart, handleSetProductToCart])

    return (
        <CartContext.Provider value={providerValue}>{children}</CartContext.Provider>
    )
}

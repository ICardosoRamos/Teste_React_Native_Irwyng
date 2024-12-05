import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { CartContext } from "../../../contexts/CartContext";
import { TCategory, TProduct } from "../../../categories";

export default function Product({ category, product }: { category: TCategory, product: TProduct }) {
    const { handleSetProductToCart } = React.useContext(CartContext);

    return (
        <TouchableOpacity style={{
            height: 40,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgb(0, 208, 173)",
            marginTop: 4,
            marginBottom: 4,
            borderRadius: 10
        }}
            onPress={() => handleSetProductToCart(category.id, product.id)}>
            <Text>{product.name} - R$ {product.price}</Text>
        </TouchableOpacity>
    )
}
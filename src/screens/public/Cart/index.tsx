import React from "react";
import { View, Text, FlatList } from "react-native";
import { CartContext } from "../../../contexts/CartContext";

const notes = [100, 50, 20, 10, 5, 2, 1];

type NotesResult = Record<number, number>;

export default function Cart() {
    const { cart } = React.useContext(CartContext);

    const calculateMinimumNotes = (amount: number): NotesResult => {
        return notes.reduce<NotesResult>((result, note) => {
            const count = Math.floor(amount / note);
            if (count > 0) {
                result[note] = count;
                amount -= count * note;
            }
            return result;
        }, {});
    };

    React.useEffect(() => {
        console.log(calculateMinimumNotes(cart))
    }, [cart.length])

    return (
        <View style={{ display: "flex", marginLeft: 2, marginRight: 2, height: "100%" }}>
            <View style={{ display: "flex" }}>
                <Text style={{ fontSize: 30, flexWrap: "wrap" }}>Here are the products that you added to the cart:</Text>
            </View>

            <View style={{
                display: "flex", alignItems: "center"
            }}>
                <FlatList
                    data={cart}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={{ fontSize: 20 }}>{item.name} - R$ {item.price}</Text>
                        </View>}
                />

                <Text style={{ fontSize: 30 }}>Total: {cart.reduce((sum, product) => sum + product.price, 0)}</Text>
                <Text style={{ fontSize: 30 }}>Minimum number of notes required to pay:</Text>
            </View>

        </View>
    )
}
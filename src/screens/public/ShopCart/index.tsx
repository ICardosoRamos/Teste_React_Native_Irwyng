import React from "react";
import { View, Text, SectionList, Touchable, TouchableOpacity } from "react-native";
import { categories as C } from "../../../categories";
import { Badge, Button } from "react-native-paper";
import { CartContext } from "../../../contexts/CartContext";
import Product from "./product";

export default function ShopCart() {
    const { cart } = React.useContext(CartContext);

    return (
        <View style={{ display: "flex", marginLeft: 2, marginRight: 2, height: "100%" }}>
            <View style={{ display: "flex", height: "6%" }}>
                <Text style={{ fontSize: 24 }}>Add some products to the cart below!</Text>
            </View>

            <View style={{
                display: "flex", height: "92%"
            }}>
                <SectionList
                    sections={C}
                    keyExtractor={(item, index) => String(item.id + index)}
                    showsVerticalScrollIndicator={false}
                    stickySectionHeadersEnabled={false}
                    renderItem={({ section, item }) => (
                        <Product category={section} product={item} />
                    )}
                    renderSectionHeader={({ section: { category } }) => (
                        <View style={{ display: "flex", alignItems: "center" }}>
                            <Text style={{ fontSize: 24, fontStyle: "italic", fontWeight: "bold" }}>{category}</Text>
                        </View>
                    )}
                />
            </View>

            <View style={{
                position: "absolute",
                top: 660,
                left: 300,
            }}>
                <Badge style={{ marginTop: 10 }}>{cart.length}</Badge>
                <TouchableOpacity style={{
                    height: 80,
                    width: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(1, 144, 254)",
                    marginTop: 4,
                    marginBottom: 4,
                    borderRadius: 100,
                }}>
                    <Text>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
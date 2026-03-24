import React, { useContext, useLayoutEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { CartContext } from "../../store/CartContext";

export default function CartScreen({ navigation }) {
    const { cart, removeFromCart, clearCart, increaseQty, decreaseQty } =
        useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    //HEADER BUTTON
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <TouchableOpacity onPress={clearCart}>
                        <Text style={{ color: "#dc2626", fontWeight: "600" }}>
                            Clear Cart
                        </Text>
                    </TouchableOpacity>


                </View>
            ),
            title: "Cart",
            headerTitleStyle: {
                fontSize: 20,   
                fontWeight: "700", 
            },
        });
    }, [navigation, cart]);

    // If CART EMPTY
    if (cart.length === 0) {
        return (
            <View style={styles.empty}>
                <Text style={styles.emptyText}>Your cart is empty</Text>

                <TouchableOpacity
                    style={styles.shopBtn}
                    onPress={() => navigation.replace("Home")}
                >
                    <Text style={styles.shopText}>Start Shopping</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Image source={{ uri: item.thumbnail }} style={styles.img} />

                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.price}>₹ {item.price}</Text>

                            {/* QUANTITY */}
                            <View style={styles.qtyRow}>
                                <TouchableOpacity
                                    style={styles.qtyBtn}
                                    onPress={() => decreaseQty(item.id)}
                                >
                                    <Text style={styles.qtyText}>-</Text>
                                </TouchableOpacity>

                                <Text style={styles.qty}>{item.quantity}</Text>

                                <TouchableOpacity
                                    style={styles.qtyBtn}
                                    onPress={() => increaseQty(item.id)}
                                >
                                    <Text style={styles.qtyText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                            <Text style={styles.remove}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />

            {/*TOTAL PRICE */}
            <View style={styles.bottom}>
                <Text style={styles.total}>Total: ₹ {total.toFixed(2)}</Text>
                {/* Place Order Button */}
                <TouchableOpacity style={styles.orderBtn} onPress={() => { }}>
                    <Text style={styles.orderText}>Place Order</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    list: {
        paddingHorizontal: 16,
        paddingTop: 10,
        paddingBottom: 100,
    },

    item: {
        flexDirection: "row",
        marginVertical: 6,
        backgroundColor: "#fff",
        padding: 12,
        borderRadius: 12,
        elevation: 2,
        alignItems: "center",
    },

    img: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 10,
    },

    title: {
        fontSize: 14,
        fontWeight: "600",
    },

    price: {
        color: "#16a34a",
        marginVertical: 4,
    },

    qtyRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6,
    },

    qtyBtn: {
        backgroundColor: "#e5e7eb",
        padding: 6,
        borderRadius: 6,
    },

    qtyText: {
        fontSize: 14,
        fontWeight: "bold",
    },

    qty: {
        marginHorizontal: 10,
        fontSize: 14,
    },

    remove: {
        color: "#dc2626",
        fontWeight: "500",
    },

    bottom: {
        padding: 16,
        borderTopWidth: 1,
        borderColor: "#eee",
        backgroundColor: "#fff",
    },

    total: {
        fontSize: 18,
        fontWeight: "bold",
    },

    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },

    emptyText: {
        fontSize: 18,
        marginBottom: 20,
    },

    shopBtn: {
        backgroundColor: "#2563eb",
        padding: 12,
        borderRadius: 10,
    },

    shopText: {
        color: "#fff",
        fontWeight: "600",
    },

    orderBtn: {
        marginTop: 10,
        backgroundColor: "#2563eb",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
    },

    orderText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});




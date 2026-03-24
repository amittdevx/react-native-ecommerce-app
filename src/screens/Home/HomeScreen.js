import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    Platform,
} from "react-native";
import { fetchProducts } from "../../services/api";
import ProductCard from "../../components/ProductCard";

export default function HomeScreen({ navigation }) {
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);

    const loadProducts = async () => {
        if (loading) return;

        setLoading(true);
        try {
            const res = await fetchProducts(10, skip);
            setProducts((prev) => [...prev, ...res.products]);
            setSkip((prev) => prev + 10);
        } catch (err) {
            console.log("ERROR:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <View style={styles.container}>
            {/*STATUS BAR */}
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

            {/*MERGING STATUSBAR WITH CUSTOM HEADER */}
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>ShopEase</Text>
            </View>

            {/*PRODUCT LIST */}
            <View style={{ flex: 1, marginTop: 1 }}>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProductCard
                            item={item}
                            onPress={() =>
                                navigation.navigate("ProductDetail", { product: item })
                            }
                        />
                    )}
                    onEndReached={loadProducts}
                    onEndReachedThreshold={0.5}
                    ListFooterComponent={
                        loading ? <ActivityIndicator size="large" /> : null
                    }
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}

                /></View>

            {/*FLOATING BUTTON */}
            <TouchableOpacity
                style={styles.floatingBtn}
                onPress={() => navigation.navigate("Cart")}
            >
                <Text style={styles.floatingText}>View Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },

    /*HEADER */
    headerContainer: {
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        paddingHorizontal: 16,
        paddingBottom: 14,
        elevation: 4, 
        
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
    },

    /*LIST */
    listContent: {
        paddingHorizontal: 10,
        paddingTop: 1,
        paddingBottom: 120,
    },

    /*FLOATING BUTTON */
    floatingBtn: {
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#2563eb",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 6,
    },

    floatingText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
});
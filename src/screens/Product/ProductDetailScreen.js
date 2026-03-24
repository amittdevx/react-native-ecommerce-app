import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import { CartContext } from "../../store/CartContext";


export default function ProductDetailScreen({ route }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);

  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setShowMsg(true);

    setTimeout(() => {
      setShowMsg(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/*IMAGE OF PRODUCT */}
        <Image source={{ uri: product.thumbnail }} style={styles.image} />

        {/* PRODUCT DESCRIPTION */}
        <View style={styles.content}>
          <Text style={styles.title}>{product.title}</Text>

          <Text style={styles.price}>₹ {product.price}</Text>

          <Text style={styles.desc}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* ADD TO CART BTN */}
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      {/*SNACKBAR */}
      {showMsg && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>Added to cart</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
    backgroundColor: "#f5f5f5",
  },

  content: {
    padding: 16,
    paddingBottom: 100,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },

  price: {
    fontSize: 18,
    color: "#16a34a",
    marginBottom: 10,
    fontWeight: "600",
  },

  desc: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },


  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  btn: {
    backgroundColor: "#2563eb",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  /*SNACKBAR */
  snackbar: {
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
    backgroundColor: "#1b1b1b",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  snackbarText: {
    color: "#fff",
    fontSize: 14,
  },
});
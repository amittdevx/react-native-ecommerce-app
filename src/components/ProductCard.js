import React, { useState, useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { CartContext } from "../store/CartContext";

export default function ProductCard({ item, onPress }) {
  const { addToCart } = useContext(CartContext);
  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = () => {
    addToCart(item);
    setShowMsg(true);

    setTimeout(() => {
      setShowMsg(false);
    }, 2000);
  };

  return (
    <View style={{ position: "relative" }}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Image source={{ uri: item.thumbnail }} style={styles.image} />

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>₹ {item.price}</Text>

        <TouchableOpacity style={styles.btn} onPress={handleAdd}>
          <Text style={styles.btnText}>Add to Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/*SNACKBAR*/}
      {showMsg && (
        <View style={styles.snackbar}>
          <Text style={styles.snackbarText}>Added to cart</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: "600",
  },
  price: {
    fontSize: 14,
    color: "green",
    marginVertical: 5,
  },
  btn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  // SNACKBAR STYLE
  snackbar: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#333",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  snackbarText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
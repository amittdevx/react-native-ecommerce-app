import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/Auth/LoginScreen";
import OTPScreen from "../screens/Auth/OTPScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProductDetailScreen from "../screens/Product/ProductDetailScreen";
import CartScreen from "../screens/Cart/CartScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Home" component={HomeScreen}  options={{  headerShown: false, }}  />
            <Stack.Screen name="ProductDetail" component={ProductDetailScreen}  options={{  title: "Product Detail", }} />
            <Stack.Screen name="Cart" component={CartScreen}  options={{  headerShown: true, }} />
        </Stack.Navigator>
    );
}
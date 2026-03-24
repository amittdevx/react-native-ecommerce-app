import React, { useState } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, StatusBar } from "react-native";

export default function LoginScreen({ navigation }) {
    const [phone, setPhone] = useState("");

    const handleLogin = () => {
        if (phone.length < 10) {
            alert("Enter valid phone number");
            return;
        }
        navigation.navigate("OTP");
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.subtitle}>Login to continue</Text>

                    <TextInput
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.btn} onPress={handleLogin}>
                        <Text style={styles.btnText}>Send OTP</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
        color: "#666",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 12,
        padding: 14,
        marginBottom: 20,
        backgroundColor: "#fff",
    },
    btn: {
        backgroundColor: "#007bff",
        padding: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
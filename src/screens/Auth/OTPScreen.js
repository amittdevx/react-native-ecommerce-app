import React, { useState } from "react";
import {
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { View, StatusBar } from "react-native";

export default function OTPScreen({ navigation }) {
    const [otp, setOtp] = useState("");

    const verifyOTP = () => {
        if (otp === "1234") {
            navigation.reset({
                index: 0,
                routes: [{ name: "Home" }],
            });
        } else {
            Alert.alert("Invalid OTP");
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={styles.container}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <Text style={styles.title}>Verify OTP</Text>

                    <TextInput
                        placeholder="Enter OTP"
                        value={otp}
                        onChangeText={setOtp}
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.btn} onPress={verifyOTP}>
                        <Text style={styles.btnText}>Verify</Text>
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
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        padding: 14,
        marginBottom: 20,
        backgroundColor: "#fff",
    },
    btn: {
        backgroundColor: "#007bff",
        padding: 14,
        borderRadius: 10,
        alignItems: "center",
    },
    btnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});
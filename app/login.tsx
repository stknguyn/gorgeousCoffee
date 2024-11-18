import React, { useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { useRouter } from "expo-router";
import { Text, YStack, Button, Input, Label, Separator, H3 } from "tamagui";
import { LogIn, Phone, Lock } from "@tamagui/lucide-icons"; // Import các icon
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem("phone", phone);
    } catch (e) {
      // Handle saving error
    }

    try {
      const value = await AsyncStorage.getItem("phone");
      if (value !== null) {
        // Handle value retrieved
        console.log(value);
      }
    } catch (e) {
      // Handle error reading value
    }

    router.replace("/(tabs)/");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inner}
      >
        <YStack
          alignItems="center"
          justifyContent="center"
          padding="$5"
          gap="$5"
          style={styles.form}
        >
          <H3 style={styles.header}>Đăng nhập</H3>
          <Separator style={styles.separator} />

          {/* Phone Input */}
          <Label style={styles.label}>Số điện thoại</Label>
          <View style={styles.inputContainer}>
            <Phone size={20} style={styles.icon} />
            <Input
              placeholder="Nhập số điện thoại"
              keyboardType="phone-pad"
              width="100%"
              value={phone}
              onChangeText={setPhone}
              style={styles.input}
            />
          </View>

          {/* Password Input */}
          <Label style={styles.label}>Mật khẩu</Label>
          <View style={styles.inputContainer}>
            <Lock size={20} style={styles.icon} />
            <Input
              placeholder="Nhập mật khẩu"
              secureTextEntry
              width="100%"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
          </View>

          {/* Login Button */}
          <Button
            onPress={handleLogin}
            backgroundColor="blue"
            color="white"
            width="100%"
            style={styles.button}
          >
            <LogIn size={20} style={styles.buttonIcon} /> Đăng nhập
          </Button>
        </YStack>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8", // Lighter background color for a more modern look
    justifyContent: "center",
    padding: 20,
  },
  inner: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    color: "#333", // Darker color for better contrast
  },
  separator: {
    marginVertical: 10,
    width: "50%",
    height: 1,
    backgroundColor: "#ccc",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 5,
    color: "#555", // Darker label color
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    color: "#007bff", // Color of the icon
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  button: {
    borderRadius: 99999,
    paddingVertical: 12,
    backgroundColor: "#007bff", // Blue button color
    marginTop: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: 10,
    color: "#fff",
  },
});

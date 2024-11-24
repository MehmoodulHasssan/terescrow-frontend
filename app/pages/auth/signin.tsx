import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { COLORS, icons } from "@/constants";
import FONTS from "@/constants/fonts";
import Input from "./customInput";
import Button from "../utils/Button";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header Section */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Image source={icons.arrowLeft} style={styles.backIcon} />
          </TouchableOpacity>

          <Text style={styles.title}>Sign in</Text>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Don't have an account?{" "}
          <Text style={styles.createAccountText}>Create Account</Text>
        </Text>

        {/* Form Section */}
        <View style={styles.formContainer}>
          {/* Email Input */}
          <Input
            id="email"
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            style={styles.input}
          />
          {/* Password Input */}
          <Input
            id="password"
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
        </View>

        {/* Forgot Password */}
        <View style={styles.forgotPasswordContainer}>
          <Text>
            Forgot Password?{" "}
            <Text style={styles.resetPasswordText}>Reset here</Text>
          </Text>
        </View>

        {/* Button Section */}
        <View style={styles.buttonContainer}>
          <Button title="Sign in" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.dark1,
    marginVertical: 7,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.grayscale700,
  },
  createAccountText: {
    color: COLORS.primary,
    fontWeight: "600",
  },
  formContainer: {
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
  },
  forgotPasswordContainer: {
    marginTop: 10,
    marginBottom: 40,
  },
  resetPasswordText: {
    color: COLORS.primary,
    fontWeight: "700",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
});

export default Signin;

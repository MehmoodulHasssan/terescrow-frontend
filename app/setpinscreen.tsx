import { COLORS } from "@/constants";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FONTS from "@/constants/fonts";
import { useTheme } from "@/contexts/themeContext"; // Update the path as needed for your theme hook
import { useSearchParams } from "expo-router/build/hooks";
import CustomModal from "./CountriesModal";
import { useRouter } from "expo-router";
import SuccessModal from "./successmodal";

const SetPinScreen: React.FC = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const { push } = useRouter();
  const [pin, setPin] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { dark } = useTheme();

  const handlePress = (digit: string) => {
    if (pin.length < 4) {
      setPin([...pin, digit]);
    }
  };

  useEffect(() => {
    if (pin.length === 4 && title === "Set your Pin") {
      push({
        pathname: "/setpinscreen",
        params: { title: "Confirm your Pin" },
      });
      setPin([]); // Reset pin after navigating
    }

    if (pin.length >= 4 && title === "Confirm your Pin") {
      // Show the SuccessModal when the pin is confirmed
      setModalVisible(true);
    }
  }, [pin, title, push]);

  const handleModalPress = () => {
    console.log("Success modal button pressed");
    setModalVisible(false);
    push('/(tabs)/chat');
    setPin([]);
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  const themeStyles = {
    background: dark ? COLORS.dark1 : COLORS.white,
    textPrimary: COLORS.primary,
    textSecondary: dark ? COLORS.greyscale500 : COLORS.grayscale700,
    pinDot: "#eafff7",
    pinDotFilled: dark ? COLORS.white : COLORS.dark1,
    buttonBackground: dark ? COLORS.gray2 : COLORS.grayscale100,
    buttonText: dark ? COLORS.white : COLORS.dark1,
    passwordPins: dark ? COLORS.black : COLORS.white,
    pinInputCont: dark ? COLORS.gray2 : COLORS.grayscale200,
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: themeStyles.background }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.iconContainer,
            { backgroundColor: themeStyles.pinDot },
          ]}
        >
          <Text style={[styles.pinText, { color: themeStyles.textPrimary }]}>
            {pin.length < 4 ? "***" : pin.join("")}
          </Text>
        </View>
        <Text
          style={[
            styles.title,
            { color: themeStyles.buttonText, fontWeight: "bold" },
          ]}
        >
          {title}
        </Text>
        <Text style={[styles.subtitle, { color: themeStyles.textSecondary }]}>
          Set a 4-digit PIN to authorize your transactions and also to log in to
          your account.
        </Text>

        <View
          style={[
            styles.pinInputContainer,
            { backgroundColor: themeStyles.pinInputCont },
          ]}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <View
              key={index}
              style={[
                styles.pinDot,
                {
                  backgroundColor:
                    pin.length > index
                      ? themeStyles.pinDotFilled
                      : themeStyles.passwordPins,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.numberPad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <TouchableOpacity
              key={digit}
              style={[
                styles.numberButton,
                { backgroundColor: themeStyles.buttonBackground },
              ]}
              onPress={() => handlePress(digit.toString())}
            >
              <Text
                style={[
                  styles.numberButtonText,
                  { color: themeStyles.buttonText },
                ]}
              >
                {digit}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.emptyButton} />
          <TouchableOpacity
            style={[
              styles.numberButton,
              { backgroundColor: themeStyles.buttonBackground },
            ]}
            onPress={() => handlePress("0")}
          >
            <Text
              style={[
                styles.numberButtonText,
                { color: themeStyles.buttonText },
              ]}
            >
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.numberButton,
              { backgroundColor: themeStyles.buttonBackground },
            ]}
            onPress={handleBackspace}
          >
            <Text
              style={[
                styles.numberButtonText,
                { color: themeStyles.buttonText },
              ]}
            >
              ←
            </Text>
          </TouchableOpacity>
        </View>
        <SuccessModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          onPress={handleModalPress}
          buttonTitle="Go to dashboard"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  pinText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: FONTS.Bold,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 30,
  },
  pinInputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    borderRadius: 50,
    marginBottom: 30,
  },
  pinDot: {
    width: 15,
    height: 15,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  numberPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
  numberButton: {
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  emptyButton: {
    width: 80,
    height: 80,
    margin: 10,
  },
  numberButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default SetPinScreen;

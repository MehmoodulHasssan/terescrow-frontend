import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/utils/Button";
import { COLORS, icons } from "@/constants";
import { Image } from "expo-image";
import { useTheme } from "@/contexts/themeContext";

// Assuming you have a custom button component
const { height: screenHeight } = Dimensions.get("window");

interface DraggableModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const DraggableModal: React.FC<DraggableModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [modalHeight] = useState(new Animated.Value(0));
  const translateY = useRef(new Animated.Value(0)).current;

  const { dark } = useTheme();
  // Drag responder logic
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dy > 0) translateY.setValue(gestureState.dy);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dy > 100) {
        onClose(); // Close modal if dragged down too far
      } else {
        Animated.spring(translateY, {
          toValue: 0, // Reset position
          useNativeDriver: false,
        }).start();
      }
    },
  });

  useEffect(() => {
    if (isVisible) {
      translateY.setValue(screenHeight); // Start position for modal
      Animated.parallel([
        Animated.timing(modalHeight, {
          toValue: screenHeight * 0.7, // Increased modal height (70% of the screen height)
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: 0, // Slide up
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(modalHeight, {
          toValue: 0, // Collapse modal height
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(translateY, {
          toValue: screenHeight, // Slide down out of view
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [isVisible]);

  // Apply dark/light theme
  const themeStyles = {
    background: dark ? COLORS.dark1 : COLORS.white,
    normalText: dark ? COLORS.white : COLORS.black,
    verifiedBackground: dark ? COLORS.grayscale200 : COLORS.transparentAccount,
    iconBackground: dark ? COLORS.transparentAccount : COLORS.grayscale200,
  };

  return (
    <ScrollView>
      <Modal visible={isVisible} animationType="fade" transparent>
        <View style={styles.overlay}>
          <Animated.View
            {...panResponder.panHandlers}
            style={[
              styles.modalContainer,
              { height: modalHeight, transform: [{ translateY }] },
            ]}
          >
            <View style={{ margin: "auto" }}>
              <Text
                style={{
                  height: 4,
                  margin: "auto",
                  width: 40,
                  backgroundColor: COLORS.greyscale300,
                }}
              ></Text>
              <View>
                <View
                  style={[
                    styles.iconContainer,
                    {
                      backgroundColor: themeStyles.iconBackground,
                    },
                  ]}
                >
                  <Image source={icons.activity} style={styles.icon} />
                </View>
                <Text style={[styles.title, { color: themeStyles.normalText }]}>
                  Upgrade to Tier 2
                </Text>
              </View>
            </View>

            {/* Modal Body */}
            <View style={styles.body}>
              <Text style={[styles.description, { color: themeStyles.normalText }]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor
                sit amet dolor.
              </Text>
              <Text
                style={[styles.requirementsTitle, { color: themeStyles.normalText }]}
              >
                Requirements
              </Text>
              <Text style={[styles.requirement, { color: themeStyles.normalText }]}>
                - BVN Verification
              </Text>

              <View style={styles.infoBox}>
                <Text style={{ fontSize: 12 }}>
                  Your daily limit will be increased to unlimited for all crypto
                  and Gift Card Transactions
                </Text>
              </View>
            </View>

            <View>
              <Button title="Continue" onPress={onClose} />
            </View>
          </Animated.View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
  },
  icon: {
    width: 40,
    height: 40,
  },
  modalContainer: {
    borderTopLeftRadius: 12,
    backgroundColor: COLORS.white,
    borderTopRightRadius: 12,
  },
  iconContainer: {
    margin: "auto",
    marginVertical: 20,
    padding: 15,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  body: {
    marginBottom: 24,
  },
  description: {
    fontSize: 14,
    marginVertical: 12,
    textAlign: "center",
  },
  requirementsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  requirement: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  infoBox: {
    backgroundColor: COLORS.transparentAccount,
    padding: 12,
  },
});

export default DraggableModal;

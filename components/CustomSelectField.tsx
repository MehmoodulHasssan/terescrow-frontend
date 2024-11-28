import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  FlatList,
  Animated,
  PanResponder,
} from "react-native";

interface Option {
  key: string;
  label: string;
}

const options: Option[] = [
  { key: "1", label: "Option 1" },
  { key: "2", label: "Option 2" },
  { key: "3", label: "Option 3" },
  { key: "4", label: "Option 4" },
];

const CustomSelectField: React.FC<{ title: string }> = (props) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [translateY] = useState(new Animated.Value(0));

  // PanResponder for dragging
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (gestureState.dy > 0) {
        translateY.setValue(gestureState.dy);
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dy > 100) {
        setModalVisible(false);
        Animated.timing(translateY, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  const handleSelect = (label: string) => {
    console.log(label + "i am clicked");
    setSelectedValue(label);
    setModalVisible(false);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleModalOpen = () => {
    setModalVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Select Field */}
      <TouchableOpacity style={styles.selectField} onPress={handleModalOpen}>
        <Text style={styles.selectText}>
          {selectedValue || "Select an Option"}
        </Text>
      </TouchableOpacity>

      {/* Modal */}
      <Modal
        animationType="fade"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        {/* Backdrop */}
        <Pressable
          style={styles.backdrop}
          onPress={() => setModalVisible(false)}
        />

        {/* Draggable Modal Content */}
        <Animated.View
          style={[
            styles.modalContainer,
            { transform: [{ translateY: translateY }] },
          ]}
          {...panResponder.panHandlers} // Make the whole modal draggable
        >
          <Text style={styles.modalTitle}>{props.title}</Text>
          <View>
            <FlatList
              data={options}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    "i am clicked";
                  }}
                >
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};

export default CustomSelectField;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  selectField: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    backgroundColor: "transparent",
  },
  selectText: {
    color: "#333",
  },
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
});

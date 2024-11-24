import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "@/constants";

const QuickBoxItem: React.FC<{
  icon: string;
  heading: string;
  text: string;
  onSend: () => void;
}> = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onSend}>
      <View style={styles.iconContainer}>
        <Image source={props.icon} style={styles.icon} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default QuickBoxItem;

const styles = StyleSheet.create({
  container: {
    width: "42%",
    padding: 12,
    flexDirection: "column",
    marginHorizontal: 16,
    backgroundColor: "#F7F7F7",
    marginBottom: 30,
    borderRadius: 12,
    overflow: "hidden",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E9F2EE",
  },
  icon: {
    width: 20,
    height: 20,
  },
  textContainer: {
    marginTop: 5,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 2,
  },
  text: {
    fontSize: 10,
    color: COLORS.greyscale600,
  },
});
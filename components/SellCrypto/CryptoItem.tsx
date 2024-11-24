import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { COLORS } from "@/constants";

const CryptoItem: React.FC<{
  icon: string;
  heading: string;
  text: string;
  onSend: () => void;
}> = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onSend}>
      <View style={styles.iconContainer}>
        <Image source={props.icon} style={styles.icon} contentFit="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>{props.heading}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default CryptoItem;

const styles = StyleSheet.create({
  container: {
    width: "45%",
    padding: 12,
    flexDirection: "column",
    marginHorizontal: 10,
    backgroundColor: "#F7F7F7",
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
  },
  iconContainer: {
    width: 40,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 40,
    height: 40,
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
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";

const CardItem: React.FC<{
  card: string;
  text: string;
  onSend: () => void;
}> = (props) => {
  return (
    <Pressable style={styles.container} onPress={props.onSend}>
      <Image source={props.card} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </Pressable>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    width: "52.8%",
    flexDirection: "column",
    marginBottom: 20,
    borderRadius: 12,
  },
  cardImage: {
    width: "90%",
    height: 100,
    borderRadius: 16,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
  },
});

import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import { useTheme } from "@/contexts/themeContext";
import { COLORS, icons } from "@/constants";
const Header = () => {
  const { dark } = useTheme();
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "bold", marginBottom: 4, fontSize: 16, }}>Hi, John!</Text>
        <Text style={{ fontFamily: 'Regular', color: COLORS.greyscale600 }}>Welcome to Tercescrow</Text>
      </View>
      <View>
        <Image source={icons.notification} style={styles.image} contentFit='contain' />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  mainText: {
    fontSize: 14,
  },
  image: {
    flex: 1,
    width: 27,
    height: 27,
  },
});
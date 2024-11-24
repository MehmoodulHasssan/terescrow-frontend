import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import images from "@/constants/images";
import Swiper from "react-native-swiper";
import { COLORS } from "@/constants";

const SwipCard = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons={false}
      showsPagination={true}
      paginationStyle={styles.pagination}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
    >
      <View style={styles.slide}>
        <Image
          source={images.buySellCard}
          style={styles.image}
          contentFit="contain"
        />
      </View>
      <View style={styles.slide}>
        <Image
          source={images.cryptoCard}
          contentFit="contain"
          style={styles.image}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  pagination: {
    bottom: 0,
    marginBottom: -10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#70D4A3", // Default color for inactive dots
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 6,
    backgroundColor: COLORS.green, // Color for the active dot
    marginHorizontal: 5,
  },
});

export default SwipCard;
import { Image, StyleSheet, Platform, View, Dimensions } from "react-native";
import Header from "@/components/index/Header";
import CardSwiper from "@/components/index/CardSwiper";
import { SafeAreaView } from "react-native-safe-area-context";
import profile from "./profile";
import QuickAction from "@/components/index/QuickAction";
import RecentContainer from "@/components/index/RecentContainer";
import { useTheme } from "@/contexts/themeContext";
import { COLORS } from "@/constants";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
import Profile from "./profile";
import TerceScrow from "../tercescrow";
import SplashSteam from "../splashsteam";
export default function HomeScreen() {
  const { dark } = useTheme();
  console.log(dark);
  return (
    <SafeAreaView
      style={[
        { flex: 2 },
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <View style={{ flex: 1 }}>
        <Header />
      </View>
      <View style={{ flex: 10 }}>
        <View style={{ width: "100%", height: screenHeight * 0.25 }}>
          <CardSwiper />
        </View>
        {/* Responsive QuickAction */}
        <View>
          <QuickAction />
        </View>
        {/* Responsive RecentContainer */}
        <View style={{ width: "100%", height: screenHeight * 0.2 }}>
          <RecentContainer />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});

import { Image, StyleSheet, Platform, View } from "react-native";
import Header from "@/components/index/Header";
import CardSwiper from "@/components/index/CardSwiper";
import { SafeAreaView } from "react-native-safe-area-context";
import QuickAction from "@/components/index/QuickAction";
import RecentContainer from "@/components/index/RecentContainer";
import OTPVerification from "./otpverification";
import SignUp from "./signup";
import Signin from "./signin";
import ForgetPassword from "./forgetpassword";
import SetNewPassword from "./setnewpassword";
import SuccessModal from "./successmodal";
export default function HomeScreen() {

  return (
    // <SafeAreaView style={{ flex: 2 }}>
    //   <View style={{ flex: 1 }}>
    //     <Header />
    //   </View>
    //   <View style={{ flex: 10 }}>
    //     <View style={{ width: "100%", height: " 28%" }}>
    //       <CardSwiper />
    //     </View>
    //     <View>
    //       <QuickAction />
    //     </View>
    //     <View style={{ width: '100%', height: 200 }}>
    //       <RecentContainer />
    //     </View>
    //   </View>
    // </SafeAreaView>
    <OTPVerification />
    // <SignUp />
    // <Signin />
    // <ForgetPassword />

    // <SetNewPassword />
    // <SetPinScreen title="Set your Pin" />
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

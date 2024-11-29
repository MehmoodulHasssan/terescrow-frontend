import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CryptoCardCom from "@/components/CryptoCardCom";
import { COLORS, icons } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";
const Usdt = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView
      style={[
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <NavigateBack text="USDT" />
      <CryptoCardCom card={icons.usdt} />
      <View
        style={{
          height: "62%",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <InformationFields />
        <CustomProceed />
      </View>
    </SafeAreaView>
  );
};

export default Usdt;

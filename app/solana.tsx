import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CryptoCardCom from "@/components/CryptoCardCom";
import { icons } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";
import { COLORS } from "@/constants";
const Solana = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView style={[
      dark
        ? { backgroundColor: COLORS.black }
        : { backgroundColor: COLORS.white },
    ]}>
      <NavigateBack text="SOLANA" />
      <CryptoCardCom card={icons.solana} />
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

export default Solana;

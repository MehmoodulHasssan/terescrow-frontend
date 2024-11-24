import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import NavigateBack from "@/components/NavigateBack";
import CryptoBox from "@/components/SellCrypto/CryptoBox";

const sellcrypto = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <NavigateBack text="Sell Crypto" />
      <View style={{ flex:1 }}>
        <CryptoBox />
      </View>
    </SafeAreaView>
  );
};

export default sellcrypto;

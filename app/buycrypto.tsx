import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import NavigateBack from "@/components/NavigateBack";
import CryptoBox from "@/components/SellCrypto/CryptoBox";

const BuyCrypto = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigateBack text="Buy Crypto" />
      <View style={{ flex: 1 }}>
        <CryptoBox />
      </View>
    </SafeAreaView>
  );
};

export default BuyCrypto;

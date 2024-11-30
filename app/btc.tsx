import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CryptoCardCom from "@/components/CryptoCardCom";
import { COLORS, icons } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";
const Btc = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View>
          <NavigateBack text="BTC" />
        </View>
        <View>
          <CryptoCardCom card={icons.btc} />
        </View>
        <View style={styles.mainContent}>
          <View style={[{ height: 535 }]}>
            <InformationFields />
          </View>
          <View style={{ marginBottom: 10 }}>
            <CustomProceed />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
  },
});

export default Btc;

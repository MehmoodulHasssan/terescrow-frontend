import { StyleSheet, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CardCom from "@/components/CardCom";
import { images } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";
import { Colors } from "@/constants/Colors";

const VisaCard = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView
      style={[
        { flex: 1 },
        dark
          ? { backgroundColor: Colors.dark.background }
          : { backgroundColor: Colors.light.background },
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View>
          <NavigateBack text="Visa Card" />
        </View>
        <View>
          <CardCom card={images.visaCard} />
        </View>
        <View style={styles.mainContent}>
          <View style={[{ height: 500 }]}>
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
    marginTop: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default VisaCard;

import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CardCom from "@/components/CardCom";
import { COLORS, images } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";

const NikeCard = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView
      style={[
        { flex:1 },
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <ScrollView style={{ flex: 1 }}>
        <View>
          <NavigateBack text="Nike" />
        </View>
        <View>
          <CardCom card={images.nikeCard} />
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
    justifyContent: "space-between",
    flexDirection: "column",
  },
});

export default NikeCard;

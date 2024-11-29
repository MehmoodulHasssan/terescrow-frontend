import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CardCom from "@/components/CardCom";
import { COLORS, images } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
import { useTheme } from "@/contexts/themeContext";

const googleplaycard = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView
      style={[
        dark
          ? { backgroundColor: COLORS.black }
          : { backgroundColor: COLORS.white },
      ]}
    >
      <NavigateBack text="Google Play" />
      <CardCom card={images.googlePlayCard} />
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

export default googleplaycard;

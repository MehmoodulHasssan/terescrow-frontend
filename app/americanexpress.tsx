import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CardCom from "@/components/CardCom";
import { images } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
const AmericanExpress = () => {
  return (
    <SafeAreaView>
      <NavigateBack text="American Express" />
      <CardCom card={images.americanExpressCard} />
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

export default AmericanExpress;
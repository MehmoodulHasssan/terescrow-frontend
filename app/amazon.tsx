import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import CardCom from "@/components/CardCom";
import { images } from "@/constants";
import InformationFields from "@/components/InformationFields";
import CustomProceed from "@/components/CustomProceed";
const Amazon = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigateBack text="Amazon" />
      <CardCom card={images.amazonCard} />
      <View style={styles.mainContent}>
        <InformationFields />
        <CustomProceed />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    height: '62%', 
    marginBottom: 20 , 
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Amazon;

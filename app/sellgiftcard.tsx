import { View } from "react-native";
import NavigateBack from "@/components/NavigateBack";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInputField from "@/components/SearchInputField";
import CardList from "@/components/SellGifts/CardList";
const SellGiftCard = () => {
  return (
    <SafeAreaView>
      <View>
        <NavigateBack text="Giftcards" />
      </View>
      <View>
        <SearchInputField />
      </View>
      <View>
        <CardList />
      </View>
    </SafeAreaView>
  );
};

export default SellGiftCard;

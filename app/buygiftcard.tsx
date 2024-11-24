import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavigateBack from "@/components/NavigateBack";
import SearchInputField from "@/components/SearchInputField";
import CardList from "@/components/SellGifts/CardList";

const BuyGiftCard = () => {
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

export default BuyGiftCard;

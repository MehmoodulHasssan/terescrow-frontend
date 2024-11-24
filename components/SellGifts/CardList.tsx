import { images } from "@/constants";
import { Text, View, FlatList } from "react-native";
import CardItem from "./CardItem";
import { Route, useRouter } from "expo-router";

const CardList = () => {
  const router = useRouter();
  const data = [
    {
      id: "1",
      card: images.amazonCard,
      text: "Amazon",
      route: "/amazon",
    },
    {
      id: "2",
      card: images.americanExpressCard,
      text: "American Express",
      route: "/americanexpress",
    },
    {
      id: "3",
      card: images.visaCard,
      text: "Visa Card",
      route: "/visacard",
    },
    {
      id: "4",
      card: images.ebayCard,
      text: "Ebay",
      route: "/ebaycard",
    },
    {
      id: "5",
      card: images.footLockerCard,
      text: "Footlocker",
      route: "/footlocker",
    },
    {
      id: "6",
      card: images.googlePlayCard,
      text: "Google Play",
      route: "/googleplaycard",
    },
    {
      id: "7",
      card: images.itunesCard,
      text: "iTunes",
      route: "/itunescard",
    },
    {
      id: "8",
      card: images.nikeCard,
      text: "Nike",
      route: "/nikecard",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CardItem
            card={item.card}
            text={item.text}
            onSend={() => router.push(item.route as Route)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ marginHorizontal: 16 }}
        contentContainerStyle={{ padding: 0 }}
      />
    </View>
  );
};

export default CardList;

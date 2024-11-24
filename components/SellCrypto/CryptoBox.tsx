import { icons } from "@/constants";
import { FlatList, View, Text, StyleSheet } from "react-native";
import CryptoItem from "./CryptoItem";
import { Route, useRouter } from "expo-router";

const CryptoBox = () => {
  const router = useRouter();
  const data = [
    {
      key: "1",
      icon: icons.btc,
      heading: "BTC",
      text: "Bitcoin Wallet",
      route: "/btc",
    },
    {
      icon: icons.usdt,
      key: "2",
      heading: "USDT",
      text: "Tether Wallet",
      route: "/usdt",
    },
    {
      icon: icons.eth,
      key: "3",
      heading: "ETH",
      text: "Ethereum Wallet",
      route: "/eth",
    },
    {
      icon: icons.solana,
      key: "4",
      heading: "SOLANA",
      text: "Tether Wallet",
      route: "/solana",
    },
    {
      icon: icons.shibaInu,
      key: "5",
      heading: "SHIBU INU",
      text: "Tether Wallet",
      route: "shibuinu",
    },
    {
      icon: icons.dogeCoin,
      key: "6",
      heading: "DOGE COIN",
      text: "Tether Wallet",
      route: "/dogecoin",
    },
    {
      icon: icons.dollarCoin,
      key: "7",
      heading: "USDC",
      text: "Ethereum Wallet",
      route: "/usdc",
    },
    {
      icon: icons.bnb,
      key: "8",
      heading: "BNB",
      text: "Tether Wallet",
      route: "/bnb",
    },
    {
      icon: icons.tonCoin,
      key: "9",
      heading: "TONCOIN",
      text: "Ethereum Wallet",
      route: "/toncoin",
    },
    {
      icon: icons.tron,
      key: "10",
      heading: "TRON",
      text: "Tether Wallet",
      route: "/tron",
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <CryptoItem
            icon={item.icon}
            heading={item.heading}
            text={item.text}
            onSend={() => router.push(item.route as Route)}
          />
        )}
        keyExtractor={(item) => item.key}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
  },
  mainHeading: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default CryptoBox;

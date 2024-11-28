import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DoughnutChart from "@/components/DoughnutChart";
import TransactionList from "@/components/Transaction/TransactionList";
import { useTheme } from "@/contexts/themeContext";
import { COLORS } from "@/constants";

const transactions = () => {
  const { dark } = useTheme();
  return (
    <SafeAreaView style={[{ flex: 1 }, dark ? {backgroundColor: COLORS.black} : { backgroundColor: COLORS.white } ]}>
      <Text style={styles.pageTitle}>Transaction</Text>
      <View style={{ flex: 1 }}>
        <DoughnutChart />
      </View>
      <View style={{ flex: 1 }}>
        <TransactionList />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  pageTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 32,
  },
});

export default transactions;

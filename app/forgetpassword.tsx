import { COLORS, icons } from "@/constants";
import { Image } from "expo-image";
import React from "react";
import { Formik } from "formik";
import { useRouter } from "expo-router";
import {
  ScrollView,
  Touchable,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@/contexts/themeContext";
import { validationforgetPasswordSchema } from "@/utils/validation";
import Input from "./customInput";
import Button from "@/utils/Button";

const ForgetPassword = () => {
  const { dark } = useTheme();
  const { push } = useRouter();

  const themeStyles = {
    background: dark ? COLORS.dark1 : COLORS.white,
    normalText: dark ? COLORS.white : COLORS.black,
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeStyles.background }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <TouchableOpacity>
            <Image
              source={icons.arrowBack}
              style={{
                width: 20,
                height: 20,
                marginBottom: 10,
                tintColor: themeStyles.normalText,
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              { fontWeight: "bold", fontSize: 25, marginVertical: 9 },
              { color: themeStyles.normalText },
            ]}
          >
            Forget Password
          </Text>
          <Text style={{ color: themeStyles.normalText }}>
            Fill in the details below to get started.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationforgetPasswordSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              values,
              errors,
              touched,
              
            }) => (
              <View style={[styles.secondryCont]}>
                <View>
                  <Input
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    label="Email Address"
                    keyboardType="email-address"
                    errorText={
                      touched.email && errors.email ? errors.email : ""
                    }
                    showCheckbox={false}
                    prefilledValue={values.email}
                    id="email"
                  />
                </View>
                <View style={{ width: "100%", marginBottom: 20 }}>
                  <Button
                    style={{
                      opacity: !(values.email && !errors.email) ? 0.6 : 1,
                    }}
                    title="Continue"
                    onPress={() => push('/setnewpassword')}
                    disabled={!errors.email}
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    padding: 20,
  },
  secondryCont: {
    flexDirection: "column",
    marginTop: 15,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ForgetPassword;

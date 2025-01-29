import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Avatar, Button, TextInput } from "react-native-paper";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <>
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/logo.png")}
              style={{ width: 150, height: 180 }}
            />
          </View>
          <Text
            style={{
              color: Colors.white,
              textAlign: "center",
              fontSize: 15,
            }}
          >
            Get on board and be a part of us. Get ready for the excited venture
            together
          </Text>
          <KeyboardAvoidingView>
            <View style={{ marginTop: 20 }}>
              <TextInput
                placeholder="Name"
                value={""}
                keyboardType={"default"}
                onChangeText={(text) => {}}
                mode="outlined"
                outlineStyle={{ borderColor: "transaprent" }}
                contentStyle={{
                  backgroundColor: Colors.charcoal,
                  borderRadius: 10,
                }}
                style={{ marginTop: 20 }}
              />
              <TextInput
                placeholder="Email"
                value={""}
                keyboardType={"email-address"}
                onChangeText={(text) => {}}
                mode="outlined"
                outlineStyle={{ borderColor: "transaprent" }}
                contentStyle={{
                  backgroundColor: Colors.charcoal,
                  borderRadius: 10,
                }}
                style={{ marginTop: 20 }}
              />
              <TextInput
                placeholder="Password"
                value={""}
                keyboardType={"visible-password"}
                onChangeText={(text) => {}}
                mode="outlined"
                outlineStyle={{ borderColor: "transaprent" }}
                contentStyle={{
                  backgroundColor: Colors.charcoal,
                  borderRadius: 10,
                }}
                style={{ marginTop: 20 }}
              />
            </View>
          </KeyboardAvoidingView>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.action}
              buttonColor={Colors.tintColor}
              textColor={Colors.white}
            >
              Register
            </Button>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 3,
                paddingTop: 20,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  fontSize: 15,
                  fontWeight: 400,
                  textAlign: "center",
                }}
              >
                Already a member?
              </Text>
              <Link href={"/login"}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: Colors.white,
                  }}
                >
                  Sign in
                </Text>
              </Link>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
  action: {
    marginTop: 15,
    borderRadius: 10,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

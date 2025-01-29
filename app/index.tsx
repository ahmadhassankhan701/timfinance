import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

const Page = ({}) => {
  return (
    <>
      <View style={[styles.container, { paddingTop: 50 }]}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/welcome.png")}
              style={{ width: 250, height: 180 }}
            />
          </View>
          <Text style={styles.title}>Bank on-the-go with our app</Text>
          <Text style={styles.subtitle}>
            Manage your finances anytime, anywhere with our online banking app.
          </Text>
        </View>
        <Link href={"/register"} style={{ paddingTop: 20 }}>
          <Button
            mode="contained"
            buttonColor={Colors.tintColor}
            textColor={Colors.white}
            style={{ borderRadius: 10, width: "100%" }}
          >
            Create Account
          </Button>
        </Link>
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
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.grey,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "800",
    paddingTop: 50,
    textAlign: "center",
    width: 230,
  },
  subtitle: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    width: 300,
    paddingTop: 20,
  },
});

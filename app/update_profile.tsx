import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Avatar, Button, TextInput } from "react-native-paper";
import Colors from "@/constants/Colors";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => null,
        }}
      />
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar.Image
              source={{
                uri: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              size={150}
            />
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              placeholder="Name"
              value={""}
              onChangeText={(text) => {}}
              mode="outlined"
              outlineStyle={{ borderColor: "transaprent" }}
              contentStyle={{
                backgroundColor: Colors.charcoal,
                borderRadius: 10,
              }}
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
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
                marginTop: 15,
              }}
            >
              <Link href="/update_password">
                <Text style={{ color: Colors.white }}>Reset Password?</Text>
              </Link>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Link href={"/(tabs)/profile"}>
              <Button
                mode="outlined"
                onPress={() => console.log("Pressed")}
                style={styles.action}
                buttonColor={"red"}
                textColor={Colors.white}
              >
                Cancel
              </Button>
            </Link>
            <Button
              mode="contained"
              onPress={() => console.log("Pressed")}
              style={styles.action}
              buttonColor={Colors.tintColor}
              textColor={Colors.white}
            >
              Update
            </Button>
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

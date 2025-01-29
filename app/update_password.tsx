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
              paddingTop: 5,
            }}
          >
            <Text style={styles.title}>Update Password</Text>
            <Text style={styles.subtitle}>Update and save it</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              placeholder="New Password"
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
              placeholder="Retype New Password"
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
  title: {
    color: Colors.white,
    fontSize: 25,
    fontWeight: "800",
  },
  subtitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Badge, IconButton } from "react-native-paper";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.userInfoWrapper}>
          <Image
            source={{
              uri: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={styles.userImg}
          />
          <View style={styles.userTxtWrapper}>
            <Text style={[styles.userText, { fontSize: 12 }]}>Hi, Welcome</Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              John <Text style={styles.boldText}>Doe</Text>
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}} style={styles.btnWrapper}>
          <Badge
            style={{
              position: "absolute",
              right: 0,
              backgroundColor: Colors.tintColor,
              color: Colors.white,
            }}
            size={17}
          >
            3
          </Badge>
          <IconButton
            icon="bell"
            iconColor={Colors.white}
            size={20}
            onPress={() => console.log("Pressed")}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  userTxtWrapper: {
    marginLeft: 10,
  },
  userText: {
    color: Colors.white,
  },
  boldText: {
    fontWeight: "700",
  },
  btnWrapper: {
    position: "relative",
  },
  btnText: {
    color: Colors.white,
    fontSize: 12,
  },
});

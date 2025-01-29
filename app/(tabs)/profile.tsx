import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link, Stack } from "expo-router";
import { Avatar, Card, IconButton, List } from "react-native-paper";
import {
  AntDesign,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Page = ({}) => {
  return (
    <>
      <Stack.Screen
        options={{
          header: () => null,
        }}
      />
      <View style={[styles.container, { paddingTop: 50 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>My Account</Text>
          <Text style={styles.subtitle}>profile, settings and more ...</Text>
          <Card.Title
            style={styles.profileCard}
            title="John Doe"
            subtitle="+52 1234 5678"
            left={(props) => (
              <Avatar.Image
                {...props}
                source={{
                  uri: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
              />
            )}
            right={(props) => (
              <Link href="/update_profile" style={{ marginRight: 15 }}>
                <IconButton
                  {...props}
                  icon="pencil"
                  containerColor={Colors.white}
                  iconColor={Colors.tintColor}
                  onPress={() => alert("olla motale")}
                  size={15}
                />
              </Link>
            )}
          />
          <List.Section>
            <List.Item
              title="Account Level"
              left={() => (
                <MaterialCommunityIcons
                  name="account-details-outline"
                  size={24}
                  color={Colors.white}
                />
              )}
            />
            <List.Item
              title="Transaction History"
              left={() => (
                <Foundation
                  name="clipboard-notes"
                  size={24}
                  color={Colors.white}
                />
              )}
            />
            <List.Item
              title="My Wallet"
              left={() => (
                <AntDesign name="wallet" color={Colors.white} size={18} />
              )}
            />
            <List.Item
              title="Logout"
              left={() => (
                <AntDesign name="logout" color={Colors.white} size={18} />
              )}
            />
          </List.Section>
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
  profileCard: {
    backgroundColor: Colors.tintColor,
    borderRadius: 10,
    marginTop: 20,
  },
});

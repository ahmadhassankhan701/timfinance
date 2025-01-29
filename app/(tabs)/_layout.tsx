import React from "react";
import { Tabs, useRouter } from "expo-router";
import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  const router = useRouter();
  const authed = true;
  if (!authed) router.replace("/login");
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: "absolute",
            bottom: 40,
            justifyContent: "center",
            alignSelf: "center",
            marginHorizontal: 60,
            paddingHorizontal: 10,
            height: 60,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: "#333",
            borderTopColor: "#333",
          },
          tabBarShowLabel: true,
          tabBarInactiveTintColor: "#999",
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              marginTop: 5,
            },
            tabBarActiveTintColor: Colors.tintColor,
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  borderRadius: 30,
                }}
              >
                <SimpleLineIcons
                  name="home"
                  size={25}
                  color={focused ? Colors.tintColor : Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarLabel: "Transactions",
            tabBarLabelStyle: {
              marginTop: 5,
            },
            tabBarActiveTintColor: Colors.tintColor,
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  borderRadius: 30,
                }}
              >
                <AntDesign
                  name="swap"
                  size={25}
                  color={focused ? Colors.tintColor : Colors.white}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Account",
            tabBarLabelStyle: {
              marginTop: 5,
            },
            tabBarActiveTintColor: Colors.tintColor,
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  borderRadius: 30,
                }}
              >
                <FontAwesome
                  name="user-o"
                  size={25}
                  color={focused ? Colors.tintColor : Colors.white}
                />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  );
};

export default Layout;

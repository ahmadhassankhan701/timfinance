import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { IncomeType } from "@/types";
import { IconButton } from "react-native-paper";

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    let icon = (
      <IconButton
        icon={item.icon}
        iconColor={Colors.white}
        size={20}
        onPress={() => console.log("Pressed")}
      />
    );

    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 10,
          borderRadius: 20,
          marginRight: 10,
          width: 100,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "#666",
              borderWidth: 1,
              borderRadius: 50,
              padding: 1,
            }}
          >
            {icon}
          </View>
          <Text
            style={{
              color: Colors.white,
              fontSize: 13,
              fontWeight: "600",
              marginTop: 10,
            }}
          >
            {item.name}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});

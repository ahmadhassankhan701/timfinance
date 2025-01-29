import {
  Dimensions,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ExpenseType } from "@/types";
import Colors from "@/constants/Colors";
import { Feather } from "@expo/vector-icons";
import { IconButton } from "react-native-paper";
const screenWidth = Dimensions.get("screen").width;
const ExpenseBlock = ({ expenseList }: { expenseList: ExpenseType[] }) => {
  const renderItem: ListRenderItem<Partial<ExpenseType>> = ({
    item,
    index,
  }) => {
    let amount = item?.amount?.split(".");

    return (
      <View style={styles.expenseBlock}>
        <View style={styles.aligno}>
          <Text
            style={[
              styles.expenseBlockTxt1,
              {
                color:
                  item.name == "Food"
                    ? Colors.black
                    : item.name == "Saving"
                    ? Colors.black
                    : Colors.white,
              },
            ]}
          >
            Your Balance
          </Text>
          <IconButton
            icon="dots-horizontal"
            iconColor={Colors.white}
            size={24}
            onPress={() => console.log("Pressed")}
          />
        </View>
        <Text style={styles.expenseBlockTxt2}>
          ${amount ? amount[0] + "." : "0."}
          <Text style={styles.expenseBlockTxt2Span}>
            {amount ? amount[1] : "00"}
          </Text>
        </Text>
        <View style={styles.aligno}>
          <Text style={styles.expenseBlockTxt1}>Visa</Text>
          <Text style={styles.expenseBlockTxt1}>1234 4567 **** ****</Text>
        </View>
      </View>
    );
  };

  const staticItem = [{ name: "Add Item" }];

  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={expenseList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expenseBlock: {
    backgroundColor: Colors.tintColor,
    width: screenWidth - 50,
    padding: 10,
    borderRadius: 15,
    justifyContent: "space-between",
  },
  expenseBlockTxt1: {
    color: Colors.white,
    fontSize: 16,
  },
  expenseBlockTxt2: {
    color: Colors.white,
    fontSize: 50,
    fontWeight: "600",
    marginBottom: 15,
  },
  expenseBlockTxt2Span: {
    fontSize: 30,
    fontWeight: "400",
  },
  expenseBlock3View: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 10,
  },
  aligno: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

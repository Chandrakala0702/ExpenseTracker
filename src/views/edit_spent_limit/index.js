import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { styles as edit_screen_styles } from "./styles";
import { Icon } from "react-native-elements";
import SliderComponent from "../../components/slider_component";

const EditSpentLimitScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const dashboardState = useSelector((state) => state.dashboard);

  return (
    <View style={edit_screen_styles.container}>
      <View style={edit_screen_styles.headerContainer}>
        <Pressable style={{ height: "25%" }}>
          <Icon
            name={"chevron-left"}
            type={"material-community"}
            color={"#1D1D2C"}
            size={24}
          />
        </Pressable>
        <View style={{ height: "20%" }}>
          <Text style={edit_screen_styles.headerLabel}>
            Total Spending Limit
          </Text>
          <Text style={edit_screen_styles.headerValue}>AED 18500</Text>
        </View>
      </View>
      <View
        style={{
          height: "65%",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "95%",
          paddingHorizontal: "5%",
        }}
      >
        <SliderComponent />
      </View>
    </View>
  );
};

export default EditSpentLimitScreen;

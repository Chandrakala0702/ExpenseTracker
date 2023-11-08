import React, { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles as edit_screen_styles } from "./styles";
import { Icon } from "react-native-elements";
import SliderComponent from "../../components/slider_component";
import { EditSpentLimitConstant } from "../../utility/constants";
import { useSelector } from "react-redux";

const EditSpentLimitScreen = ({ navigation }) => {
  const dashboardState = useSelector((state) => state.dashboard);
  const [totalSpentAmountLimit, setTotalSpentAmountLimit] = useState(0);

  useEffect(() => {
    const totalSpentAmountLimit = dashboardState.spentLimitData.reduce(
      (total, item) => total + item.spentAmountLimit,
      0
    );
    setTotalSpentAmountLimit(totalSpentAmountLimit);
  }, [dashboardState.spentLimitData]);

  const handleBackNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={edit_screen_styles.container}>
      <View style={edit_screen_styles.headerContainer}>
        <Pressable style={{ height: "25%" }} onPress={handleBackNavigation}>
          <Icon
            name={"chevron-left"}
            type={"material-community"}
            color={"#1D1D2C"}
            size={24}
          />
        </Pressable>
        <View style={{ height: "20%" }}>
          <Text style={edit_screen_styles.headerLabel}>
            {EditSpentLimitConstant.title.spentLimit}
          </Text>
          <Text style={edit_screen_styles.headerValue}>
            {EditSpentLimitConstant.title.AED} {totalSpentAmountLimit}
          </Text>
        </View>
      </View>
      <View style={edit_screen_styles.sliderContainer}>
        <SliderComponent />
      </View>
    </View>
  );
};

export default EditSpentLimitScreen;

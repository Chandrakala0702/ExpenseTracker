import React from "react";
import { View, Text, Pressable } from "react-native";
import { styles as edit_screen_styles } from "./styles";
import { Icon } from "react-native-elements";
import SliderComponent from "../../components/slider_component";
import { EditSoentLimitConstant } from "../../utility/constants";

const EditSpentLimitScreen = ({ navigation }) => {
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
            {EditSoentLimitConstant.title.spentLimit}
          </Text>
          <Text style={edit_screen_styles.headerValue}>
            {EditSoentLimitConstant.title.AED} 18500
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

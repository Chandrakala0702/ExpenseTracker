import React, { useState } from "react";
import { View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";
import { styles as slider_styles } from "./styles";
import { SliderConstant } from "../../utility/constants";

const SliderComponent = () => {
  const dashboardState = useSelector((state) => state.dashboard);
  const [sliderValues, setSliderValues] = useState([0, 0, 0, 0, 0, 0]);

  const handleSliderChange = (index, value) => {
    const newSliderValues = [...sliderValues];
    newSliderValues[index] = value;
    setSliderValues(newSliderValues);
  };

  return (
    <View style={slider_styles.sliderItemContainer}>
      {dashboardState.spentLimitData.map((item, index) => (
        <View key={index} style={slider_styles.sliderItem}>
          <View style={slider_styles.sliderTitleContainer}>
            <View style={slider_styles.sliderTitleIconContainer}>
              <Icon
                name={item.name}
                type={item.type}
                color={item.trackColor}
                size={20}
              />
              <Text style={slider_styles.sliderIconTitleText}>{item.text}</Text>
            </View>
            <View
              style={[
                slider_styles.sliderTitleIconContainer,
                {
                  justifyContent: "flex-end",
                },
              ]}
            >
              <Text
                style={[
                  slider_styles.sliderIconTitleText,
                  {
                    paddingRight: "2%",
                  },
                ]}
              >
                {"AED "}
                {item.spentAmountLimit}
              </Text>
              <Icon
                name={"border-color"}
                type={"material-icon"}
                color={"#1D1D2C"}
                size={18}
              />
            </View>
          </View>
          <Slider
            style={slider_styles.sliderStyle}
            minimumValue={0}
            maximumValue={5000}
            step={1}
            value={item.spentAmountLimit}
            onValueChange={(val) => handleSliderChange(index, val)}
            minimumTrackTintColor={item.trackColor}
            maximumTrackTintColor={item.innerTrackColor}
          />
          <View style={slider_styles.sliderValueContainer}>
            <Text style={slider_styles.sliderValueText}>
              {SliderConstant.fields.number0}
            </Text>
            <Text style={slider_styles.sliderValueText}>
              {SliderConstant.fields.number5000}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default SliderComponent;

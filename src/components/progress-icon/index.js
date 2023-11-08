import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { ProgressCircle } from "react-native-svg-charts";
import { iconsData } from "../../utility/enums";
import { styles as icon_styles } from "./styles";

const IconWithProgressBar = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = (index) => {
    console.log("dhasjkgdkjs");
    setIsPressed(!isPressed);
  };

  return (
    <View style={icon_styles.container}>
      <View style={icon_styles.row}>
        {iconsData.slice(0, 3).map((icon, index) => (
          <View key={index} style={icon_styles.iconContainer}>
            <Pressable onPress={handlePress}>
              <ProgressCircle
                style={[
                  icon_styles.progressCircle,
                  {
                    backgroundColor: isPressed
                      ? icon.iconColor
                      : icon.innerCircleColor,
                  },
                ]}
                progress={isPressed ? 0 : icon.progress}
                progressColor={icon.iconColor}
                strokeWidth={2}
              >
                <View style={icon_styles.iconWrapper}>
                  <Icon
                    name={icon.name}
                    type={icon.type}
                    color={isPressed ? "white" : icon.iconColor}
                    size={20}
                  />
                </View>
              </ProgressCircle>
            </Pressable>
            <Text style={icon_styles.iconText}>{icon.text}</Text>
          </View>
        ))}
      </View>
      <View style={icon_styles.row}>
        {iconsData.slice(3, 6).map((icon, index) => (
          <View key={index} style={icon_styles.iconContainer}>
            {console.log(icon.progress)}
            <Pressable onPress={handlePress}>
              <ProgressCircle
                style={[
                  icon_styles.progressCircle,
                  {
                    backgroundColor: isPressed
                      ? icon.iconColor
                      : icon.innerCircleColor,
                  },
                ]}
                progress={isPressed ? 0 : icon.progress}
                progressColor={icon.iconColor}
                strokeWidth={2}
              >
                <View style={icon_styles.iconWrapper}>
                  <Icon
                    name={icon.name}
                    type={icon.type}
                    color={isPressed ? "white" : icon.iconColor}
                    size={20}
                  />
                </View>
              </ProgressCircle>
            </Pressable>
            <Text style={icon_styles.iconText}>{icon.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default IconWithProgressBar;

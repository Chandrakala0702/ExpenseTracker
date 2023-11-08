import React from "react";
import { View, Text, Pressable } from "react-native";
import { Icon } from "react-native-elements";
import { ProgressCircle } from "react-native-svg-charts";
import { styles as icon_styles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../redux/actions/dashboardActions";

const IconWithProgressBar = () => {
  const dashboardState = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handlePress = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <View style={icon_styles.container}>
      <View style={icon_styles.row}>
        {dashboardState.categoryData.slice(0, 3).map((category, index) => (
          <View key={index} style={icon_styles.iconContainer}>
            <Pressable
              onPress={() => {
                handlePress(category);
              }}
            >
              <ProgressCircle
                style={[
                  icon_styles.progressCircle,
                  {
                    backgroundColor:
                      dashboardState.selectedCategory &&
                      dashboardState.selectedCategory.id === category.id
                        ? category.iconColor
                        : category.innerCircleColor,
                  },
                ]}
                progress={
                  dashboardState.selectedCategory &&
                  dashboardState.selectedCategory.id === category.id
                    ? 0
                    : parseFloat(
                        category.spentAmount / category.spentAmountLimit
                      ).toFixed(1)
                }
                progressColor={category.iconColor}
                strokeWidth={2}
              >
                <View style={icon_styles.iconWrapper}>
                  <Icon
                    name={category.name}
                    type={category.type}
                    color={
                      dashboardState.selectedCategory &&
                      dashboardState.selectedCategory.id === category.id
                        ? "white"
                        : category.iconColor
                    }
                    size={20}
                  />
                </View>
              </ProgressCircle>
            </Pressable>
            <Text style={icon_styles.iconText}>{category.text}</Text>
          </View>
        ))}
      </View>
      <View style={icon_styles.row}>
        {dashboardState.categoryData.slice(3, 6).map((category, index) => (
          <View key={index} style={icon_styles.iconContainer}>
            <Pressable
              onPress={() => {
                handlePress(category);
              }}
            >
              <ProgressCircle
                style={[
                  icon_styles.progressCircle,
                  {
                    backgroundColor:
                      dashboardState.selectedCategory &&
                      dashboardState.selectedCategory.id === category.id
                        ? category.iconColor
                        : category.innerCircleColor,
                  },
                ]}
                progress={
                  dashboardState.selectedCategory &&
                  dashboardState.selectedCategory.id === category.id
                    ? 0
                    : parseFloat(
                        category.spentAmount / category.spentAmountLimit
                      ).toFixed(1)
                }
                progressColor={category.iconColor}
                strokeWidth={2}
              >
                <View style={icon_styles.iconWrapper}>
                  <Icon
                    name={category.name}
                    type={category.type}
                    color={
                      dashboardState.selectedCategory &&
                      dashboardState.selectedCategory.id === category.id
                        ? "white"
                        : category.iconColor
                    }
                    size={20}
                  />
                </View>
              </ProgressCircle>
            </Pressable>
            <Text style={icon_styles.iconText}>{category.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default IconWithProgressBar;

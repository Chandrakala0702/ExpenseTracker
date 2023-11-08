import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewCategoryData,
  setNewSpentLimitData,
  setSelectedCategory,
} from "../../redux/actions/dashboardActions";
import { styles as slider_styles } from "./styles";
import { DashboardConstant, SliderConstant } from "../../utility/constants";

const SliderComponent = ({ handleTotalSpentAmountLimit }) => {
  const dashboardState = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  const handleSliderChange = (index, value) => {
    const newSpentLimitData = [...dashboardState.spentLimitData];
    newSpentLimitData[index] = {
      ...newSpentLimitData[index],
      spentAmountLimit: value,
    };
    const categoryId = newSpentLimitData[index].id;
    const newCategoryData = dashboardState.categoryData.map((category) => {
      if (category.id === categoryId) {
        if (
          dashboardState.selectedCategory &&
          dashboardState.selectedCategory.id === category.id
        ) {
          dispatch(
            setSelectedCategory({ ...category, spentAmountLimit: value })
          );
        }
        return { ...category, spentAmountLimit: value };
      }
      return category;
    });
    dispatch(setNewSpentLimitData(newSpentLimitData));
    dispatch(setNewCategoryData(newCategoryData));
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
                  slider_styles.sliderRightIconText,
                ]}
              >
                {DashboardConstant.title.AED} {item.spentAmountLimit}
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
            style={{ width: 315, marginTop: -5 }}
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

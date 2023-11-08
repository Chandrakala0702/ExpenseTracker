import Slider from "@react-native-community/slider";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  setNewCategoryData,
  setNewSpentLimitData,
} from "../../redux/actions/dashboardActions";

const SliderComponent = () => {
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
        return { ...category, spentAmountLimit: value };
      }
      return category;
    });

    dispatch(setNewSpentLimitData(newSpentLimitData));
    dispatch(setNewCategoryData(newCategoryData));
  };

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      {dashboardState.spentLimitData.map((item, index) => (
        <View
          key={index}
          style={{
            height: "13%",
            marginVertical: 10,
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            padding: 10,
            borderRadius: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Icon
                name={item.name}
                type={item.type}
                color={item.trackColor}
                size={20}
              />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "500",
                  fontFamily: "SpaceGrotesk",
                  color: "#1D1D2C",
                  paddingLeft: "3%",
                }}
              >
                {item.text}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              <Text
                style={{
                  paddingRight: "2%",
                  fontSize: 16,
                  fontWeight: "500",
                  fontFamily: "SpaceGrotesk",
                  color: "#1D1D2C",
                }}
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
            style={{ width: 315, marginTop: -5 }}
            minimumValue={0}
            maximumValue={5000}
            step={1}
            value={item.spentAmountLimit}
            onValueChange={(val) => handleSliderChange(index, val)}
            minimumTrackTintColor={item.trackColor}
            maximumTrackTintColor={item.innerTrackColor}
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: -15,
            }}
          >
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                fontFamily: "Poppins",
                color: "#1D1D2C",
              }}
            >
              0
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "400",
                fontFamily: "Poppins",
                color: "#1D1D2C",
              }}
            >
              5000
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};
export default SliderComponent;

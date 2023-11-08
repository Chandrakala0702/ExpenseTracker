import React from "react";
import { View, Text, Image } from "react-native";
import { styles as empty_data_styles } from "./styles";

const EmptyDataView = () => {
  return (
    <View style={empty_data_styles.container}>
      <View style={empty_data_styles.imageContainer}>
        <Image
          source={require("../../../assets/images/nodata.png")}
          style={empty_data_styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={empty_data_styles.textContainer}>
        <Text style={empty_data_styles.noDataTextLabel}>No data to show</Text>
        <Text style={empty_data_styles.noDataMessageLabel}>
          It seems like you didn’t set spending limits for this month
        </Text>
      </View>
    </View>
  );
};

export default EmptyDataView;

import React from "react";
import { View, Text, Image } from "react-native";
import { styles as empty_data_styles } from "./styles";
import { DashboardConstant } from "../../utility/constants";
import { noDataImage } from "../../utility/images";

const EmptyDataView = () => {
  return (
    <View style={empty_data_styles.container}>
      <View style={empty_data_styles.imageContainer}>
        <Image
          source={noDataImage}
          style={empty_data_styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={empty_data_styles.textContainer}>
        <Text style={empty_data_styles.noDataTextLabel}>
          {DashboardConstant.title.noData}
        </Text>
        <Text style={empty_data_styles.noDataMessageLabel}>
          {DashboardConstant.title.noDataMessage}
        </Text>
      </View>
    </View>
  );
};

export default EmptyDataView;

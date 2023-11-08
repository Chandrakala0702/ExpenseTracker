import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles as calendar_styles } from "./styles";

const CalendarMonthView = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);

  const canGoToNextMonth = () => {
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return true;
    }
    return false;
  };

  const nextMonth = () => {
    if (canGoToNextMonth()) {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    }
  };

  const prevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  return (
    <View style={calendar_styles.container}>
      <Pressable onPress={prevMonth}>
        <View style={calendar_styles.arrowBackground}>
          <Text style={calendar_styles.arrow}>{"<"}</Text>
        </View>
      </Pressable>
      <Text style={calendar_styles.monthYear}>
        {months[month]} {year}
      </Text>
      <Pressable onPress={nextMonth} disabled={!canGoToNextMonth()}>
        <View style={calendar_styles.arrowBackground}>
          <Text
            style={[
              calendar_styles.arrow,
              !canGoToNextMonth() && calendar_styles.disabledArrow,
            ]}
          >
            {">"}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CalendarMonthView;

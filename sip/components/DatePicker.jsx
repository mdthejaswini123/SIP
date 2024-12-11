import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { useFonts } from "expo-font";

// Helper function to format the day with suffix (st/nd/rd/th)
const formatDayWithSuffix = (day) => {
  const suffix = ['th', 'st', 'nd', 'rd'];
  const j = day % 10;
  const k = day % 100;

  if (j === 1 && k !== 11) {
    return day + suffix[1];
  } else if (j === 2 && k !== 12) {
    return day + suffix[2];
  } else if (j === 3 && k !== 13) {
    return day + suffix[3];
  } else {
    return day + suffix[0];
  }
};

const DatePicker = ({ onDateSelect }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const [fontsLoaded] = useFonts({
    "CharmanSerif": require("@/assets/fonts/CharmanSerif-Black.otf"),
    "NotoSans": require("@/assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);

    // Notify parent of the selected date
    if (onDateSelect) {
      onDateSelect(currentDate);
    }
  };

  // Get the formatted day with suffix
  const formattedDay = formatDayWithSuffix(date.getDate());

  return (
    <View style={styles.container}>
      {/* Date of Investment Button */}
      <Text style={styles.label2}>Date of Investment (Each Month) *</Text>
      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>
          {formattedDay} of every month
        </Text>
        <Icon name="calendar-today" size={24} color="#D1A8EB" style={styles.icon} />
      </TouchableOpacity>

      {/* Date Picker */}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 327,
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 14,
    backgroundColor: '#F9F9F9',
    borderColor: '#D1A8EB',
    borderWidth: 1,
    marginBottom: 20, // Adds space between the button and footer
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'CharmanSerif',
    color: '#141414',
  },
  icon: {
    marginLeft: 10,
  },
  label2: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'NotoSans',
    color: '#595959',
    fontWeight: '300',
    textAlign: 'left',
  },
});

export default DatePicker;

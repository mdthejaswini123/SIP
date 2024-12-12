import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DatePicker from "../../components/DatePicker"; // Corrected relative path
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { useFonts } from "expo-font";

const InvestmentScreen = () => {
  const [amount, setAmount] = useState("");
  const [frequency, setFrequency] = useState("monthly");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleFrequencyChange = (value) => {
    setFrequency(value);
    setShowDatePicker(true);
  };

  const handleAmountFocus = () => {
    setShowDatePicker(true);
  };

  const [fontsLoaded] = useFonts({
    "CharmanSerif-Regular": require("../../assets/fonts/CharmanSerif-Black.otf"),
    NotoSans: require("../../assets/fonts/NotoSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.header}>
        <View style={styles.titlebar}>
          <EvilIcons name="arrow-left" size={28} color="#8C8C8C" />
          <Text style={styles.title}>Invest</Text>
        </View>
        <Text style={styles.subtitle}>Equity portfolio: Railway & Defence</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.label}>
          {showDatePicker ? "Installment Amount" : "Investment Amount"}
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          onFocus={handleAmountFocus}
          placeholder="₹0"
          placeholderTextColor="#BFBFBF"
        />

        <Text style={styles.label1}>Frequency *</Text>
        <Picker
          selectedValue={frequency}
          onValueChange={handleFrequencyChange}
          style={styles.picker}
        >
          <Picker.Item label="Monthly" value="monthly" />
          <Picker.Item label="Quarterly" value="quarterly" />
          <Picker.Item label="Yearly" value="yearly" />
        </Picker>

        {showDatePicker === true ? <View style={styles.dateVisible}><DatePicker/></View> :<View style={styles.dateNotVisible}><DatePicker/></View> }
        <View style={styles.buttonSection} >
        <View style={styles.footer}>
          <Text style={styles.securedText}>Secured by </Text>
          <Image
            source={require("@/assets/images/razorpay-logo.png")}
            style={styles.razorpayLogo}
            resizeMode="contain"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start SIP</Text>
        </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  dateVisible: {
    opacity: 1
  },
  dateNotVisible: {
    opacity: 0
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginVertical: 25,
    height: "100%",
   
  },
  header: {
    marginBottom: 20,
  },
  titlebar: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "CharmanSerif-Regular",
    color: "#262626",
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 14.4,
    fontFamily: "NotoSans",
    color: "#7F7F7F",
    marginLeft: 35,
  },
  body: {
    flex: 1,
  },
  label: {
    width: 327,
    height: 50,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: "CharmanSerif-Regular",
    color: "#8C8C8C",
    marginVertical: 10,
    textAlign: "center",
  },
  label1: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "NotoSans",
    color: "#595959",
  },
  input: {
    width: 136,
    height: 70,
    padding: 10,
    fontSize: 44,
    fontFamily: "CharmanSerif",
    color: "#552474",
    textAlign: "center",
    marginHorizontal: "auto",
    marginVertical: 10,
  },
  picker: {
    width: 327,
    height: 60,
    borderWidth: 1,
    borderColor: "#D1A8EB",
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 20,
    padding: 5,

  },
  button: {
    width: 327,
    height: 56,
    backgroundColor: "#7B28B1",
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "CharmanSerif",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "static",
    width: "100%",
    height: 50
  },
  razorpayLogo: {
    width: 100,
  },
  securedText: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "CharmanSerif",
    color: "#8C8C8C",
    marginRight: 5,
    textAlign: "center",
  },
  buttonSection: {
    top: "15%"
  }
});

// Updated styles are same as before; no additional corrections needed
export default InvestmentScreen;

import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import Icon from react-native-vector-icons
import CountryPicker from "react-native-country-picker-modal"; // Import CountryPicker
import IonIcon from "react-native-vector-icons/Ionicons"; // Import IonIcon for iOS style backspace icon
import { CallContext } from "./CallContext";

const DialPad = () => {
  const navigation = useNavigation();
  const { phoneNumber, setPhoneNumber } = useContext(CallContext);
  const [countryCode, setCountryCode] = useState("US"); // Default country code
  const [callingCode, setCallingCode] = useState("1"); // Default calling code

  const handleNumberPress = (number) => {
    setPhoneNumber((prev) => prev + number);
  };

  const handleBackspacePress = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleCallPress = () => {
    if (phoneNumber) {
      navigation.navigate("OutgoingCall");
    }
  };

  const handleHistoryPress = () => {
    navigation.navigate("CallHistory");
  };

  const handleProfilePress = () => {
    if (phoneNumber) {
      navigation.navigate("Contacts", { phoneNumber });
    }
  };

  const onSelectCountry = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const numbers = [
    { number: "1", letters: "" },
    { number: "2", letters: "ABC" },
    { number: "3", letters: "DEF" },
    { number: "4", letters: "GHI" },
    { number: "5", letters: "JKL" },
    { number: "6", letters: "MNO" },
    { number: "7", letters: "PQRS" },
    { number: "8", letters: "TUV" },
    { number: "9", letters: "WXYZ" },
    { number: "*", letters: "" },
    { number: "0", letters: "+" },
    { number: "#", letters: "" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <CountryPicker
          countryCode={countryCode}
          withFlag
          withoutCallingCode
          withFilter
          withoutCallingCodeButton
          onSelect={onSelectCountry}
          style={styles.country}
        />
        <Icon name="caret-down" size={20} color="#333" />

        <Text style={styles.callingCodeText}>+{callingCode}</Text>
        <Text style={styles.displayText}>{phoneNumber}</Text>
        <TouchableOpacity
          style={styles.backspaceButton}
          onPress={handleBackspacePress}
        >
          <Icon name="trash" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      <View style={styles.numbersContainer}>
        {numbers.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.numberButton}
            onPress={() => handleNumberPress(item.number)}
          >
            <Text style={styles.numberText}>{item.number}</Text>
            <Text style={styles.lettersText}>{item.letters}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleHistoryPress}
        >
          <Icon name="history" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.callButton} onPress={handleCallPress}>
          <Icon name="phone" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={handleProfilePress}
        >
          <Icon name="user" size={24} color="grey" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingTop: "15%",
  },
  displayContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    justifyContent: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    paddingHorizontal: 8,
    marginTop: 60,
  },
  callingCodeText: {
    fontSize: 24,
    color: "#333",
    marginLeft: 10,
    border: "1px solid grey",
  },
  displayText: {
    flex: 1,
    fontSize: 24,
    color: "#333",
    marginLeft: 10,
  },
  backspaceButton: {
    padding: 10,
  },

  numbersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "60%",
    justifyContent: "space-between",
    marginTop: 2,
  },
  numberButton: {
    width: "30%",
    aspectRatio: 1,
    marginVertical: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    backgroundColor: "#f5f5f5",
  },

  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: "30%",
  },
  numberText: {
    fontSize: 24,
    color: "#333",
  },
  lettersText: {
    fontSize: 12,
    color: "#999",
  },
  callButton: {
    width: 70,
    height: 70,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    bottom: 90,
  },
  iconButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    bottom: 90,
  },
});

export default DialPad;

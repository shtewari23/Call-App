import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const OutgoingCall = ({ phoneNumber, onEndCall }) => {
  const navigation = useNavigation();
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(false);

  const handleEndCall = () => {
    navigation.goBack();
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const toggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
  };

  const handleAddCall = () => {
    // Implement add call functionality
    console.log("Add call pressed");
  };

  const handleHoldCall = () => {
    // Implement hold call functionality
    console.log("Hold call pressed");
  };

  const handleMessage = () => {
    // Implement message functionality
    console.log("Message pressed");
  };

  return (
    <View style={styles.container}>
      {/* Top Image */}
      <View style={styles.profileIconContainer}>
        <Icon name="person-circle-outline" size={60} color="#5e5e5e" />
      </View>
      {/* Calling Text */}
      <View style={styles.callingContainer}>
        <Text style={styles.callingText}>Calling...</Text>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </View>

      {/* Icons Section */}
      <View style={styles.iconsContainer}>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.optionButton} onPress={toggleMute}>
            <Icon
              name={isMuted ? "mic-off" : "mic"}
              size={30}
              color="#5e5e5e"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={toggleSpeaker}>
            <Icon
              name={isSpeakerOn ? "volume-high" : "volume-low"}
              size={30}
              color="#5e5e5e"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleAddCall}>
            <Icon name="person-add" size={30} color="#5e5e5e" />
          </TouchableOpacity>
        </View>
        <View style={styles.iconRow}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={handleHoldCall}
          >
            <Icon name="pause" size={30} color="#5e5e5e" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleMessage}>
            <Icon name="chatbubbles" size={30} color="#5e5e5e" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => navigation.navigate("DialPad")}
          >
            <Icon name="keypad" size={30} color="#5e5e5e" />
          </TouchableOpacity>
        </View>
      </View>

      {/* End Call Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.endCallButton} onPress={handleEndCall}>
          <Icon name="call" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 40,
  },
  profileIconContainer: {
    alignItems: "center",
    height: "5px",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    height: "6px",
    backgroundColor: "#686868",
  },
  image: {
    width: 150,
    height: 150,
    color: "#686868",
  },
  callingContainer: {
    alignItems: "center",
  },
  callingText: {
    fontSize: 24,
    color: "#686868",
  },
  phoneNumber: {
    fontSize: 18,
    marginTop: 8,
  },
  iconsContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  optionButton: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
    marginVertical: 14,
    backgroundColor: "#f5f5f5",
    width: 60,
    height: 60,
    borderRadius: 40,
  },
  optionText: {
    fontSize: 16,
    color: "red",
    marginTop: 5,
  },
  bottomContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  endCallButton: {
    width: 70,
    height: 70,
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    flexDirection: "row",
    bottom: 6,
  },
  endCallButtonText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 5,
  },
});

export default OutgoingCall;

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const IncomingCall = ({ phoneNumber, onAcceptCall, onRejectCall }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.info}>Incoming call from {phoneNumber}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.acceptButton} onPress={onAcceptCall}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton} onPress={onRejectCall}>
          <Text style={styles.buttonText}>Reject</Text>
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
    backgroundColor: "#f8f8f8",
  },
  info: {
    fontSize: 24,
    marginBottom: 20,
    color: "#333",
  },
  buttons: {
    flexDirection: "row",
  },
  acceptButton: {
    padding: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  rejectButton: {
    padding: 20,
    backgroundColor: "#f44336",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 24,
    color: "#fff",
  },
});

export default IncomingCall;

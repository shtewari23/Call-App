import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CallContext } from "./CallContext";
import Icon from "react-native-vector-icons/Ionicons"; // Using Ionicons for iOS-like icons
import Icona from "react-native-vector-icons/FontAwesome";

const ContactPage = ({ route }) => {
  const { setPhoneNumber, addContact } = useContext(CallContext); // Assuming addContact is a function to add a contact
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [groups, setGroups] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const handleSave = () => {
    const contact = { name, email, groups, phone, address, notes };

    navigation.navigate("Number Management");
  };

  const handleCancel = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icona name="arrow-left" size={14} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Add contact</Text>
      </View>
      <View style={styles.inputContainer}>
        <Icon name="call-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          autoCapitalize="none"
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="person-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Name"
          keyboardType="default"
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="mail-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="people-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Groups"
          keyboardType="default"
          autoCapitalize="words"
          value={groups}
          onChangeText={setGroups}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="location-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Address"
          keyboardType="default"
          autoCapitalize="words"
          value={address}
          onChangeText={setAddress}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="document-text-outline" size={24} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Notes"
          keyboardType="default"
          autoCapitalize="sentences"
          value={notes}
          onChangeText={setNotes}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 16,
    color: "black",
    bottom: 5,
    left: 14,
  },
  header: {
    flexDirection: "row",
    bottom: 8,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
  },
  saveButton: {
    padding: 15,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    bottom: 40,
  },
  cancelButton: {
    padding: 15,
    backgroundColor: "grey",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    bottom: 40,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ContactPage;

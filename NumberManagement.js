import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ContactManagement = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "John Doe",
      number: "+123456789",
      email: "john.doe@example.com",
      address: "123 Apple St, Cupertino, CA",
      activated: true,
      default: false,
    },
    {
      id: "2",
      name: "Jane Smith",
      number: "+987654321",
      email: "jane.smith@example.com",
      address: "456 Orange Ave, Mountain View, CA",
      activated: false,
      default: true,
    },
    {
      id: "3",
      name: "Alice Johnson",
      number: "+1122334455",
      email: "alice.johnson@example.com",
      address: "789 Pine Rd, Palo Alto, CA",
      activated: true,
      default: false,
    },
    {
      id: "4",
      name: "Bob Brown",
      number: "+9988776655",
      email: "bob.brown@example.com",
      address: "321 Elm St, San Francisco, CA",
      activated: false,
      default: false,
    },
    {
      id: "5",
      name: "Emily Davis",
      number: "+5544332211",
      email: "emily.davis@example.com",
      address: "567 Oak Ave, Sunnyvale, CA",
      activated: true,
      default: false,
    },
  ]);
  const [showActivated, setShowActivated] = useState(true); // State to toggle between activated and expired contacts

  const toggleActivation = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id
        ? { ...contact, activated: !contact.activated }
        : contact
    );
    setContacts(updatedContacts);
  };

  const toggleDefault = (id) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id
        ? { ...contact, default: !contact.default }
        : { ...contact, default: false }
    );
    setContacts(updatedContacts);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity
      style={styles.contactContainer}
      onPress={() => navigation.navigate("ContactDetail", { contact: item })}
    >
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactNumber}>{item.number}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.toggleW}
          onPress={() => toggleDefault(item.id)}
        >
          {item.default ? (
            <Text style={styles.defaultButton}>Default</Text>
          ) : (
            <Icon name="star-o" size={24} color="#2196F3" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  const activatedContacts = contacts.filter((contact) => contact.activated);
  const expiredContacts = contacts.filter((contact) => !contact.activated);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={14} color="black" />
        </TouchableOpacity>

        <Text style={styles.title}>Select Main Number</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Contacts")}
        >
          <Icon name="plus" size={10} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, showActivated && styles.activeToggle]}
          onPress={() => setShowActivated(true)}
        >
          <Text
            style={[
              styles.toggleText,
              showActivated && styles.activeToggleText,
            ]}
          >
            Activated
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, !showActivated && styles.activeToggle]}
          onPress={() => setShowActivated(false)}
        >
          <Text
            style={[
              styles.toggleText,
              !showActivated && styles.activeToggleText,
            ]}
          >
            Expired
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={showActivated ? activatedContacts : expiredContacts}
        renderItem={renderContactItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.contactList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "white",
    marginTop: 14,
  },
  title: {
    fontSize: 16,
    color: "black",
    right: 32,
  },
  addButton: {
    padding: 10,
    backgroundColor: "black",
    borderRadius: 10,

    elevation: 2,
  },
  contactList: {
    padding: 20,
    paddingTop: 0,
  },
  contactContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  contactDetails: {
    flexDirection: "column",
  },
  contactName: {
    fontSize: 18,
    color: "#333",
  },
  contactNumber: {
    fontSize: 14,
    color: "#999",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleButton: {
    padding: 10,
    borderRadius: 10,
    width: "50%",
    alignItems: "center",
  },
  toggleW: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  defaultButton: {
    padding: 8,
    backgroundColor: "#ccc",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  defaultText: {
    fontSize: 12,
    color: "#333",
  },
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    margin: 20,
  },
});

export default ContactManagement;

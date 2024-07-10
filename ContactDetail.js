import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

const ContactDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Contact Details</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.field}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{contact.name}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{contact.number}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{contact.email}</Text>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{contact.address}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="phone" size={24} color="#fff" />
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="envelope" size={24} color="#fff" />
          <Text style={styles.actionText}>Message</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    top: 20,
  },
  backButton: {
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: 18,
    color: "#333",
  },
  value: {
    fontSize: 18,
    color: "#999",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "black",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  actionText: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 10,
  },
});

export default ContactDetail;

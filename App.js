import React, { useContext } from "react";
import { CallProvider, CallContext } from "./CallContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DialPad from "./DialPad";
import OutgoingCall from "./OutgoingCall";
import IncomingCall from "./IncomingCall";
import NumberManagement from "./NumberManagement";
import ContactPage from "./ContactPage";
import ContactDetail from "./ContactDetail";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <CallProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="DialPad" component={DialPadScreen} />
          <Stack.Screen
            name="OutgoingCall"
            component={OutgoingCallScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Contacts"
            options={{ headerShown: false }}
            component={ContactPage}
          />
          <Stack.Screen
            name="ContactDetail"
            component={ContactDetail}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CallProvider>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dialing Pad"
        component={DialPad}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="mobile" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Number Management"
        component={NumberManagementScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="id-card" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const DialPadScreen = ({ navigation }) => {
  const { phoneNumber, setPhoneNumber } = useContext(CallContext);

  const handleNumberPress = (number) => {
    setPhoneNumber((prev) => prev + number);
  };

  const handleCallPress = () => {
    navigation.navigate("OutgoingCall");
  };

  return (
    <DialPad onNumberPress={handleNumberPress} onCallPress={handleCallPress} />
  );
};

const OutgoingCallScreen = ({ navigation }) => {
  const { phoneNumber, setPhoneNumber } = useContext(CallContext);

  const handleEndCall = () => {
    setPhoneNumber("");
    navigation.goBack();
  };

  return <OutgoingCall phoneNumber={phoneNumber} onEndCall={handleEndCall} />;
};

const IncomingCallScreen = ({ navigation }) => {
  const { phoneNumber } = useContext(CallContext);

  const handleAcceptCall = () => {
    // Implement accept call functionality
  };

  const handleRejectCall = () => {
    navigation.goBack();
  };

  return (
    <IncomingCall
      phoneNumber={phoneNumber}
      onAcceptCall={handleAcceptCall}
      onRejectCall={handleRejectCall}
    />
  );
};

const NumberManagementScreen = () => {
  const { numbers, addNumber, setDefaultNumber } = useContext(CallContext);

  return (
    <NumberManagement
      numbers={numbers}
      onSetDefault={setDefaultNumber}
      onAddNumber={() => addNumber("NewNumber")}
    />
  );
};

export default App;

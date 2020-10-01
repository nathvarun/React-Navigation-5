import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationNativeContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useIsFocused } from "@react-navigation/core";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerRight: () => (
      <Button
        title="Save"
        onPress={() => {
          //save the changes
          navigation.replace("Home");
        }}
      />
    )
  });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: isFocused ? "#74B9FF" : "#121212" }}>HomeScreen</Text>
      <Button
        title="Go To Settings Screen"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};
const SettingsScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: isFocused ? "#74B9FF" : "#121212" }}>
        SettingsScreen
      </Text>
      <Button title="Go Back To Home Screen" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "My Home Screen" }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF0F1",
    alignItems: "center",
    justifyContent: "center"
  }
});

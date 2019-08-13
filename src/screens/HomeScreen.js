import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
	return (
		<View>
			<Text style={styles.text}>HomeScreen</Text>
			<Button title="Press me" onPress={() => console.log("Button Pressed")} />
			<TouchableOpacity onPress={() => console.log("TouchableOpacity Pressed")}>
				<Text>TouchableOpacity</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;

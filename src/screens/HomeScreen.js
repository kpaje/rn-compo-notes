import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			{/* <Text style={styles.text}>HomeScreen</Text> */}
			<Button
				title="Go to Components"
				onPress={() => navigation.navigate("Components")}
			/>
			<Button title="Go to List" onPress={() => navigation.navigate("List")} />
			<Button
				title="Go to Image"
				onPress={() => navigation.navigate("Image")}
			/>
			<Button
				title="Go to Counter"
				onPress={() => navigation.navigate("Counter")}
			/>
			<Button
				title="Go to Color Demo"
				onPress={() => navigation.navigate("Color")}
			/>
			<Button
				title="Go to RGB Square Demo"
				onPress={() => navigation.navigate("Square")}
			/>
			<Button
				title="Go to Text Demo"
				onPress={() => navigation.navigate("Text")}
			/>
			<Button
				title="Go to Box Demo"
				onPress={() => navigation.navigate("Box")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default HomeScreen;

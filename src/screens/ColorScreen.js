import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const randomRgb = () => {
	const red = Math.floor(Math.random() * 254);
	const green = Math.floor(Math.random() * 254);
	const blue = Math.floor(Math.random() * 254);

	return `rgb(${red}, ${green}, ${blue})`;
};

const ColorScreen = () => {
	const [colors, setColors] = useState([]);

	return (
		<View>
			<Button
				title="Add a Color"
				onPress={() => {
					setColors([...colors, randomRgb()]);
				}}
			/>

			<FlatList
				keyExtractor={item => item}
				data={colors}
				renderItem={({ item }) => {
					return (
						<View style={{ height: 100, width: 500, backgroundColor: item }} />
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ColorScreen;

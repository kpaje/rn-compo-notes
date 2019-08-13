import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "./components/ImageDetail";

const ImageScreen = () => {
	return (
		<View>
			<Text>Image Screen Parent</Text>
			<ImageDetail title="Forest" />
			<ImageDetail title="Jungle" />
			<ImageDetail title="Swamp" />
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ImageScreen;

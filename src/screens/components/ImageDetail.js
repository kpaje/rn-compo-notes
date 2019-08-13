import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageDetail = props => {
	console.log(props);
	return (
		<View>
			<Text>Image Detail</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default ImageDetail;

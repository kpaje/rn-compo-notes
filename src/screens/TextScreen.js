import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
	const [name, setName] = useState("");

	return (
		<View>
			<Text>Text Screen</Text>
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.input}
				value={name}
				onChangeText={newValue => setName(newValue)}
			/>
			<Text>My password is {name}</Text>
			{name.length < 4 ? (
				<Text>Name must be 4 characters or longer</Text>
			) : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: "#000000",
		borderWidth: 1
	}
});

export default TextScreen;

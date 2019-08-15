import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
	const friends = [
		{ name: "Friend1", age: 1 },
		{ name: "Friend2", age: 2 },
		{ name: "Friend3", age: 3 },
		{ name: "Friend4", age: 4 },
		{ name: "Friend5", age: 5 },
		{ name: "Friend6", age: 6 },
		{ name: "Friend7", age: 7 },
		{ name: "Friend8", age: 8 }
	];

	return (
		<FlatList
			keyExtractor={friend => friend.name}
			data={friends}
			renderItem={({ item }) => {
				return (
					<Text style={styles.text}>
						{item.name} - Age: {item.age}
					</Text>
				);
			}}
		/>
	);
};

const styles = StyleSheet.create({
	text: {
		marginVertical: 50
	}
});

export default ListScreen;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { primary } from "../../constants";

export const Header = () => {
	return (
		<View style={styles.topview}>
			<Text
				style={{
					position: "absolute",
					top: 5,
					textAlign: "center",
					fontSize: 30,
					color: "#fff",
					fontWeight: "bold",
				}}
			>
				Ticket
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	topview: {
		marginTop: 60,
		marginHorizontal: 24,
		backgroundColor: primary,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

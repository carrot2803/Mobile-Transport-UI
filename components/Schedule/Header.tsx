import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { primary } from "../../constants";

export const Header = ({ img, color, title }: any) => {
	return (
		<View style={[styles.topview, { backgroundColor: color, marginBottom: 20 }]}>
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
				{title}
			</Text>
			<Image source={img}></Image>
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

import { View, StyleSheet } from "react-native";

export const Card = (props: any) => {
	return <View style={[props.elevated && card.container, props.style]}>{props.children}</View>;
};

const card = StyleSheet.create({
	container: {
		shadowColor: "#BEBEBE",
		shadowOffset: { width: 4, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 25,
		elevation: 5,
	},
});

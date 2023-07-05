import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Row = ({ s, color, txtCol, type }: any) => {
	return (
		<View style={s}>
			<TouchableOpacity style={[row.btn, { backgroundColor: color }]}>
				<Text style={[row.txt, { color: txtCol }]}>{type}</Text>
			</TouchableOpacity>
			<Text style={{ fontWeight: "bold" }}>Balance : $84</Text>
		</View>
	);
};

const row = StyleSheet.create({
	btn: { width: 125, marginTop: 10, borderRadius: 8 },
	txt: { paddingVertical: 10, fontWeight: "bold", textAlign: "center" },
});

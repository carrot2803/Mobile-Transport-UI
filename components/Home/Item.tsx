import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { dataProps } from "../../constants";
import { Card } from "../General/Card";

export const Item = ({ item }: { item: dataProps }) => {
	return (
		<Card>
			<View style={[itemStyle.main, itemStyle.align, { backgroundColor: item.backgroundColor }]}>
				<View style={{ justifyContent: "space-between" }}>
					<Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
					<TouchableOpacity style={itemStyle.btn} onPress={item.handler}>
						<Text style={{ textAlign: "center", fontWeight: "bold" }}>Select</Text>
					</TouchableOpacity>
				</View>
				<View>
					<Image style={{ position: "absolute", right: -15, bottom: 2 }} source={item.imagesrc}></Image>
				</View>
			</View>
		</Card>
	);
};

const itemStyle = StyleSheet.create({
	align: { flexDirection: "row", justifyContent: "space-between" },
	main: { padding: 15, height: 150, marginHorizontal: 26, marginBottom: 20, borderRadius: 10 },
	btn: { backgroundColor: "#fff", width: 70, padding: 5, borderRadius: 6, marginTop: 50 },
});

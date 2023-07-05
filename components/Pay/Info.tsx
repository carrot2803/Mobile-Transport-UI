import { StyleSheet, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { primary, qr } from "../../constants";
import { Card, Path } from "../General";

export const Info = () => {
	return (
		<Card elevated={true} style={inform.card}>
			<Path col={primary} />
			<View style={{ flexDirection: "row", marginTop: 10 }}>
				<View>
					<View style={{ flexDirection: "row", marginTop: 15, alignItems: "center" }}>
						<Ionicons name="timer-outline" size={15} color="#000" />
						<Text style={{ marginLeft: 10, fontWeight: "bold" }}>10:00</Text>
						<Ionicons style={{ opacity: 0.2, marginLeft: 10 }} name="train" size={15} color="#000" />
						<Text style={{ marginLeft: 5, fontWeight: "bold" }}>10:30</Text>
					</View>
					<View style={{ flexDirection: "row", marginTop: 15 }}>
						<Ionicons name="location-outline" size={15} color="#000" />
						<Text style={{ marginLeft: 10, fontWeight: "bold" }}>POS MRT Station</Text>
					</View>
					<View style={{ flexDirection: "row", marginTop: 15 }}>
						<Ionicons name="timer-outline" size={15} color="#000" />
						<Text style={{ marginLeft: 10, fontWeight: "bold" }}>$ 5.0</Text>
					</View>
				</View>
				<View style={{ width: 50, height: 50, marginLeft: 10, marginTop: 10 }}>
					<Image source={qr} style={{ height: 100, width: 100, marginLeft: 50 }} />
				</View>
			</View>
		</Card>
	);
};

const inform = StyleSheet.create({
	card: { backgroundColor: "#fff", marginHorizontal: 24, marginTop: -180, padding: 30, borderRadius: 10 },
});

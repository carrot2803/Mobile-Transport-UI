import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const Nav = () => {
	return (
		<View style={{ position: "absolute", bottom: 0, width: "100%" }}>
			<View
				style={{ flexDirection: "row", justifyContent: "space-between", margin: 26, backgroundColor: "#fff" }}
			>
				<Ionicons name="home" size={25} color="#35A2C1" />
				<Ionicons name="person" size={25} color="#BDBEC1" />
				<Ionicons name="location-sharp" size={25} color="#BDBEC1" />
			</View>
		</View>
	);
};

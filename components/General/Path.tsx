import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { path } from "../../constants/styles";

export const Path = ({ col }: { col: string }) => {
	return (
		<View style={{ width: "100%" }}>
			<View style={{ flexDirection: "row", marginBottom: 15, alignItems: "center" }}>
				<Ionicons name="location-sharp" size={26} color={col} />
				<View style={{ marginLeft: 20 }}>
					<Text style={{ opacity: 0.6, fontSize: 15 }}>From</Text>
					<Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>POS MRT Station</Text>
				</View>
			</View>
			<View style={path.line}></View>
			<View style={[path.to, path.align]}>
				<Ionicons name="location-sharp" size={26} color="#5C7A82" />
				<View style={{ marginLeft: 20 }}>
					<Text style={{ opacity: 0.6, fontSize: 15, marginTop: 10 }}>To</Text>
					<Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 10 }}>SCA MRT Station</Text>
				</View>
			</View>
		</View>
	);
};

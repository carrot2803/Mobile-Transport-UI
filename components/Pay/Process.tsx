import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { pay } from "../../constants/styles";
import { primary } from "../../constants";
import { Info } from "./Info";
import { Row } from "./Row";

export const Process = () => {
	return (
		<View style={pay.bottomview}>
			<Info />
			<Text style={{ marginHorizontal: 26, marginVertical: 16, fontWeight: "bold", fontSize: 20 }}>Payment</Text>
			<Text style={{ marginHorizontal: 26, fontWeight: "bold", fontSize: 15, marginVertical: 10 }}>
				Enter Amount
			</Text>
			<TextInput value="$     5.0" style={[pay.pay, pay.pTxt]} />
			<View>
				<Row s={[pay.row, pay.row2]} color="#6BC5E8" txtCol="#fff" type="Credit Card" />
				<Row s={pay.row} color="#EBE7E6" type="E-wallet" />
			</View>
			<TouchableOpacity style={{ padding: 7, margin: 26, borderRadius: 12, backgroundColor: primary }}>
				<Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold", color: "#fff" }}>Buy Ticket</Text>
			</TouchableOpacity>
		</View>
	);
};

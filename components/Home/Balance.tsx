import { View, Text, StyleSheet } from "react-native";
import { Card } from "../General/Card";
import { bal } from "../../constants/styles";

export const Balance = () => {
	return (
		<>
			<Card elevated={true} style={[bal.card, bal.cardAlign]}>
				<View style={{ alignItems: "center" }}>
					<Text style={bal.txt}>Balance</Text>
					<Text style={bal.price}>$ 18</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text style={bal.txt}>Rewards</Text>
					<Text style={bal.price}>$ 10.25</Text>
				</View>
				<View style={{ alignItems: "center" }}>
					<Text style={bal.txt}>Total Trips</Text>
					<Text style={bal.price}>189</Text>
				</View>
			</Card>
			<Text style={{ marginHorizontal: 26, marginVertical: 20, fontWeight: "bold", fontSize: 20 }}>
				Choose your Transport
			</Text>
		</>
	);
};

import { Header, Process } from "../components/Pay";
import { View, StyleSheet } from "react-native";
import { primary } from "../constants";

export default function Payment() {
	return (
		<View style={pay.container}>
			<Header />
			<Process />
		</View>
	);
}

const pay = StyleSheet.create({
	bottomview: { flex: 2, backgroundColor: "#fff", borderTopLeftRadius: 50, borderTopRightRadius: 50 },
	container: { flex: 1, backgroundColor: primary },
	card: { backgroundColor: "#fff", marginHorizontal: 24, marginTop: -180, padding: 30, borderRadius: 10 },
	pay: { padding: 8, marginHorizontal: 23, marginVertical: 5, borderRadius: 8 },
	pTxt: { backgroundColor: "#EBE7E6", fontWeight: "bold" },
	row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 26 },
	row2: { marginTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: "#EBE7E6" },
});

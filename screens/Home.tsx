import { Header, Balance, Nav, HomeData } from "../components/Home";
import { View, StyleSheet } from "react-native";
import { primary } from "../constants";

export default function Home() {
	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.bottomview}>
				<Balance />
				<HomeData />
				<Nav />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomview: { flex: 2, backgroundColor: "#fff", borderTopLeftRadius: 50, borderTopRightRadius: 50 },
	container: { flex: 1, backgroundColor: primary },
});

import { StyleSheet } from "react-native";
import { primary } from ".";

export const path = StyleSheet.create({
	align: { borderTopStartRadius: 60, borderTopEndRadius: 20, flexDirection: "row", alignItems: "center" },
	to: { borderColor: "#EBE7E6", borderTopWidth: 2 },
	line: { position: "absolute", left: 12, height: 28, borderWidth: 1, top: 42, borderColor: "#EBE7E6" },
});

export const head = StyleSheet.create({
	align: { flex: 1, justifyContent: "space-between" },
	view: { marginTop: 60, marginHorizontal: 24, backgroundColor: primary },
	msg: { color: "#fff", fontSize: 35, fontWeight: "bold" },
	msgContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
	circle: { borderRadius: 25, height: 50, width: 50, backgroundColor: "#fff" },
	salign: { flexDirection: "row", alignItems: "center" },
	searchbar: { backgroundColor: "#fff", width: "100%", height: 40, borderRadius: 10, marginBottom: 65 },
	txt: { color: "#BEBEBE", marginLeft: 15, opacity: 0.5, fontSize: 20 },
	icon: { width: 40, transform: [{ rotateY: "180deg" }] },
});

export const bal = StyleSheet.create({
	bottomview: { flex: 2, backgroundColor: "#fff", borderTopLeftRadius: 50, borderTopRightRadius: 50 },
	txt: { fontWeight: "bold", marginBottom: 10 },
	price: { fontWeight: "bold", fontSize: 18 },
	card: { backgroundColor: "#fff", marginHorizontal: 24, padding: 30, borderRadius: 10 },
	cardAlign: { flexDirection: "row", justifyContent: "space-between", marginTop: -40 },
});

export const sched = StyleSheet.create({
	bottomview: { flex: 2, backgroundColor: "#fff", borderTopLeftRadius: 50, marginTop: 20, borderTopRightRadius: 50 },
	container: { flex: 1, backgroundColor: primary },
	card: { backgroundColor: "#fff", marginHorizontal: 24, marginTop: 30, padding: 10, borderRadius: 10 },
	cardAlign: { flexDirection: "row", justifyContent: "space-between" },
	txt: { marginHorizontal: 26, marginVertical: 20, fontWeight: "bold", fontSize: 20 },
});

export const pay = StyleSheet.create({
	bottomview: { flex: 2, backgroundColor: "#fff", borderTopLeftRadius: 50, borderTopRightRadius: 50 },
	pay: { padding: 8, marginHorizontal: 23, marginVertical: 5, borderRadius: 8 },
	pTxt: { backgroundColor: "#EBE7E6", fontWeight: "bold" },
	row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 26 },
	row2: { marginTop: 20, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: "#EBE7E6" },
});

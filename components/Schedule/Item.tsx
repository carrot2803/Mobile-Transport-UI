import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { primary, scheduleProps } from "../../constants";

export const scheduleItem = ({ item }: { item: scheduleProps }) => {
	return (
		<View
			style={{
				marginBottom: 10,
				borderBottomWidth: 2,
				marginHorizontal: 5,
				borderBottomStartRadius: 30,
				borderBottomEndRadius: 10,
				borderBottomColor: "#EBE7E6",
			}}
		>
			<View
				style={{
					flexDirection: "row",
					marginHorizontal: 26,
					marginBottom: 10,
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Ionicons name="timer-outline" size={15} color="#000" />
					<Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.departuretime}</Text>
					<Ionicons name="swap-horizontal-outline" size={15} color="#000" />
					<Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.arrivaltime}</Text>
				</View>
				<View>
					<Text style={{ fontWeight: "bold", marginRight: 16 }}>$ {item.price}</Text>
				</View>
			</View>
			<View
				style={{
					flexDirection: "row",
					marginHorizontal: 26,
					marginBottom: 15,
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Ionicons name="location-outline" size={15} color="#000" />
					<Text style={{ fontSize: 15, fontWeight: "bold", marginHorizontal: 10 }}>{item.name}</Text>
				</View>
				<View>
					<TouchableOpacity
						onPress={item.handler}
						style={{ backgroundColor: primary, paddingHorizontal: 8, borderRadius: 5 }}
					>
						<Text style={{ color: "#fff", fontWeight: "bold" }}>Select</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

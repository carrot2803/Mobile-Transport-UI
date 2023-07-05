import { scheduleItem } from "../../components/Schedule/Item";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";

export default function ScheduleData() {
	const nav: any = useNavigation();
	const DATA = [
		{
			id: 1,
			departuretime: "10:00",
			arrivaltime: "10:30",
			name: "SCA MRT Station",
			price: "5.0",
			handler: () => {
				nav.navigate("payment", { price: "5.0" });
			},
		},
		{
			id: 2,
			departuretime: "12:00",
			arrivaltime: "12:30",
			name: "POS MRT Station",
			price: "5.0",
			handler: () => {
				nav.navigate("payment", { price: "5.0" });
			},
		},
	];
	return (
		<View>
			<FlatList data={DATA} renderItem={scheduleItem} keyExtractor={(item: any) => item.id} />
		</View>
	);
}

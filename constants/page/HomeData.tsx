import { useNavigation } from "@react-navigation/native";
import { View, FlatList } from "react-native";
import { Item } from "../../components/Home/Item";
import { bus, mrt } from "..";

export default function HomeData() {
	const nav: any = useNavigation();
	const DATA = [
		{
			id: 1,
			name: "Bus",
			backgroundColor: "#6BC5E8",
			imagesrc: bus,
			handler: () => {
				nav.navigate("schedule", { title: "Bus", imagesrc: bus, backgroundColor: "#6BC5E8" });
			},
		},
		{
			id: 2,
			name: "MRT",
			backgroundColor: "#3A9EC2",
			imagesrc: mrt,
			handler: () => {
				nav.navigate("schedule", { title: "MRT", imagesrc: mrt, backgroundColor: "#3A9EC2" });
			},
		},
	];
	return (
		<View>
			<FlatList data={DATA} renderItem={Item} keyExtractor={(item: any) => item.id} />
		</View>
	);
}

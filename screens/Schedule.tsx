import { Header } from "../components/Schedule/Header";
import { dataProps } from "../constants";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Card, Path } from "../components/General";
import { sched } from "../constants/styles";
import ScheduleData from "../constants/page/ScheduleData";

export default function Schedule() {
	const route = useRoute();
	const params: dataProps | any = route.params;
	return (
		<View style={[sched.container, { backgroundColor: params.backgroundColor }]}>
			<Header img={params.imagesrc} color={params.backgroundColor} title={params.title} />
			<View style={sched.bottomview}>
				<Card elevated={true} style={[sched.card, sched.cardAlign]}>
					<Path col={params.backgroundColor} />
				</Card>
				<Text style={sched.txt}>Choose Schedule</Text>
				<ScheduleData />
			</View>
		</View>
	);
}

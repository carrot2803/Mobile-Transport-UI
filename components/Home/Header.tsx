import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { head } from "../../constants/styles";

export const Header = () => {
	return (
		<View style={[head.view, head.align]}>
			<View style={head.msgContainer}>
				<Text style={head.msg}>{"Hello,<br/>Carrot".split("<br/>").join("\n")}</Text>
				<View style={head.circle}></View>
			</View>
			<Text style={{ color: "#fff" }}> Where will you go</Text>
			<View style={[head.salign, head.searchbar]}>
				<Ionicons name="search-outline" size={25} color="#BEBEBE" style={head.icon} />
				<TextInput placeholder="Search" style={head.txt}></TextInput>
			</View>
		</View>
	);
};

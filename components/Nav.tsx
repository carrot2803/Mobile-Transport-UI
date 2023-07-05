import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Payment from "../screens/Payment";

const Stack = createStackNavigator();

export const Nav = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="home" component={Home} />
			<Stack.Screen name="schedule" component={Schedule} />
			<Stack.Screen name="payment" component={Payment} />
		</Stack.Navigator>
	);
};

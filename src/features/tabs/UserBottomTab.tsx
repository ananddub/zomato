import DeliveryScreen from '@features/delivery/DeliveryScreen'
import DiningScreen from '@features/dining/DiningScreen'
import LiveScreen from '@features/live/LiveScreen'
import ReOrderScreen from '@features/reorder/ReOrderScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CustomTabIconComponent } from './TabIcon'

const Tab = createBottomTabNavigator()


export default function UserBottomTab() {
    return (
        <Tab.Navigator
            tabBar={(props: any) => <CustomTabIconComponent {...props} />}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}

        >
            <Tab.Screen name="Delivery" component={DeliveryScreen} />
            <Tab.Screen name="ReOrder" component={ReOrderScreen} />
            <Tab.Screen name="Dining" component={DiningScreen} />
            <Tab.Screen name="Live" component={LiveScreen} />
        </Tab.Navigator>
    )
}

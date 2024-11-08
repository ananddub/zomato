import SplashScreen from '@features/auth/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/NavigationUtils'
import LoginScreen from '@features/auth/LoginScreen'
import AnimatedTab from '@features/tabs/AnimatedTab'
import Test from '@features/temp/Test'
import Test1 from '@features/temp/Test1'

const Stack = createNativeStackNavigator()
export default function Navgation() {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName='SplashScreen'
                screenOptions={{
                    headerShown: false,
                    animation: 'fade'
                }}
            >
                <Stack.Screen
                    component={SplashScreen}
                    name="SplashScreen"
                />
                <Stack.Screen
                    component={LoginScreen}
                    name="LoginScreen"
                />
                <Stack.Screen
                    component={AnimatedTab}
                    name="UserBottomTab"
                />
                <Stack.Screen
                    options={{ headerShown: true, animation: 'none' }}
                    component={Test}
                    name="Test"
                />
                <Stack.Screen
                    options={{ headerShown: true, title: "Next Page", animation: 'none' }}
                    component={Test1}
                    name="Test1"
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

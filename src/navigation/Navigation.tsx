import SplashScreen from '@features/auth/SplashScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from '@utils/NavigationUtils'
import LoginScreen from '@features/auth/LoginScreen'
import AnimatedTab from '@features/tabs/AnimatedTab'


const Stack = createNativeStackNavigator()
export default function Navgation() {
    return (
        <NavigationContainer
            ref={navigationRef}
        >
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
            </Stack.Navigator>
        </NavigationContainer>
    )
}

import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { goBack, navigate } from '@utils/NavigationUtils'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { interpolate, useAnimatedStyle, useEvent, useSharedValue, withTiming } from 'react-native-reanimated'

export default function Test1() {

    const widthvalue = useSharedValue(1)
    const onPress = () => {
        widthvalue.value = 0
        console.log("Test Value of 1")
        goBack()
    }
    useEffect(() => {
        widthvalue.value = 0
    }, [])
    const animation = useAnimatedStyle(() => {
        const value = interpolate(
            widthvalue.value,
            [0, 1],
            [200, 400]
        )
        const borderRadius = interpolate(
            widthvalue.value,
            [1, 0],
            [100, 0]
        )
        return {
            width: withTiming(value, { duration: 600 }),
            height: withTiming(value, { duration: 600 }),
            borderRadius: withTiming(borderRadius, { duration: 600 }),
        }
    })

    return (
        <View style={styles.container}>
            <Animated.Image
                source={{ uri: 'https://picsum.photos/id/39/200' }}
                style={animation}
                sharedTransitionTag="tag"
            />
            <TouchableOpacity onPress={onPress}>
                <Text>
                    Go Back
                </Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

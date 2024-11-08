import { Alert, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { navigate } from '@utils/NavigationUtils'
import { SafeAreaView } from 'react-native-safe-area-context'
import Animated, { interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated'
import { TapGestureHandler, TapGestureHandlerGestureEvent } from 'react-native-gesture-handler'

export default function Test1() {
    const widthvalue = useSharedValue(0)
    const navigatin = useNavigation()
    useEffect(() => {
        const unsubscribe = navigatin.addListener('focus', () => {
            widthvalue.value = 0
        });
        return unsubscribe;
    }, [])
    const onPress = () => {
        widthvalue.value = 1
        navigate("Test1")
    }
    const animation = useAnimatedStyle(() => {
        const value = interpolate(
            widthvalue.value,
            [0, 1],
            [400, 200]
        )
        const borderRadius = interpolate(
            widthvalue.value,
            [0, 1],
            [100, 0]
        )
        return {
            width: withTiming(value, { duration: 600 }),
            height: withTiming(value, { duration: 600 }),
            borderRadius: withTiming(borderRadius, { duration: 600 }),
            backgroundColor: '#1c1c1c',
            overflow: 'hidden'
        }
    })
    const x = useSharedValue(0)
    const y = useSharedValue(0)
    const rippleStart = useSharedValue(0)
    const ripplestyle = useAnimatedStyle(() => {
        const scale = interpolate(
            rippleStart.value,
            [0, 1],
            [1, 90]
        )
        const opacity = interpolate(
            rippleStart.value,
            [0, 1],
            [0, 0.4]
        )
        return {
            position: 'absolute',
            zIndex: 5,
            backgroundColor: 'grey',
            width: 10,
            height: 10,
            opacity: withTiming(opacity, { duration: 300 }),
            borderRadius: 1000,
            top: 0,
            left: 0,
            transform: [
                {
                    translateX: x.value - 10,
                },
                {

                    translateY: y.value - 10
                },
                {
                    scale: withTiming(scale, { duration: 700 }, () => {
                        if (rippleStart.value)
                            rippleStart.value = 0
                    })
                }
            ]
        }
    })
    const tabGestureEvent = useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
        onStart: async function(e) {
            x.value = e.x
            y.value = e.y
            rippleStart.value = 1
        },
        onActive: (e) => {
        },
        onEnd: (e) => {
        }
    })
    return (<View style={styles.container}>
        <TapGestureHandler onGestureEvent={tabGestureEvent}  >
            <Animated.View style={{ overflow: 'hidden', borderRadius: 100 }}>
                <Animated.View
                    style={animation}
                />
                <Animated.View
                    style={ripplestyle}
                />
            </Animated.View>
        </TapGestureHandler>
        <TouchableOpacity onPress={onPress}>
            <Text>
                Go to NextPage
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

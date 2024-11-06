import { Pressable, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

interface Props {
    onLongPress?: () => void
    children: React.ReactNode
    onPress?: () => void
    onLayout?: (e: any) => void
    style?: ViewStyle | ViewStyle[]
}

export default function ScalePress({ onLongPress, children, style, onLayout, onPress }: Props) {
    const salce = useSharedValue(1)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: salce.value
                }
            ]
        }
    })
    const onPressIn = () => {
        salce.value = withTiming(0.9, { duration: 200 })
    }

    const onPressOut = () => {
        salce.value = withTiming(1, { duration: 200 })
    }

    return (
        <TouchableOpacity
            onLayout={onLayout}
            style={{ flex: 1 }}
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onLongPress={onLongPress}
            activeOpacity={0.7}
        >
            <Animated.View style={[style, animatedStyle]} >
                {children}
            </Animated.View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})

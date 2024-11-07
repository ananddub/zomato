import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { useShareState } from '@features/tabs/SharedContext'
import Graphics from '@components/home/Graphics'
import HeaderSection from '@components/home/HeaderSection'
import MainList from '@components/list/MainList'

export default function DeliveryScreen() {
    const insight = useSafeAreaInsets()
    const { styles } = useStyles(homeStyles)
    const { scrollGlobalY, scrollY } = useShareState()
    const moveUpStyle = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollGlobalY.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP
        )
        return {
            transform: [{ translateY }]
        }
    })

    const moveUpStyleNotExtraPolate = useAnimatedStyle(() => {
        const translateY = interpolate(
            scrollGlobalY.value,
            [0, 50],
            [0, -50],

        )
        return {
            transform: [{ translateY }]
        }
    })
    const backgroundColorChange = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollGlobalY.value,
            [1, 50],
            [0, 1]
        )
        return {
            backgroundColor: `rgba(255,255,255,${opacity})`
        }
    })
    return (
        <View style={styles.container}>
            <View style={{ height: Platform.OS === "android" ? insight.top : 0 }} />
            <Animated.View style={[moveUpStyle]} >
                <Animated.View style={[moveUpStyleNotExtraPolate]}>
                    <Graphics />
                </Animated.View>
                <Animated.View style={[backgroundColorChange, styles.topHeader]}>
                    <HeaderSection />
                </Animated.View>
                <Animated.View style={[moveUpStyle]}>
                    <MainList />
                </Animated.View>
            </Animated.View>
        </View>
    )
}


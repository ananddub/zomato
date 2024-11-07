import { Platform, StyleSheet, Text, View, requireNativeComponent } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import LottieView from 'lottie-react-native'
export default function Graphics() {
    const { styles } = useStyles(homeStyles)
    return (
        <View style={[styles.lottieContainer]} pointerEvents='none'>
            <LottieView
                source={require("@assets/animations/event.json")}
                autoPlay={Platform.OS === "android" ? false : true}
                loop={Platform.OS === "android" ? false : true}
                hardwareAccelerationAndroid
                style={[styles.lottie,]}
            />
        </View>
    )
}


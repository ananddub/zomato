import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
interface Props {
    postion: 'bottom' | 'top',
    mode?: 'light' | 'dark',
    style?: ViewStyle

}

const darkColors = [
    'rgba(0,0,0,0.9)',
    'rgba(0,0,0,0.7)',
    'rgba(0,0,0,0.4)',
    'rgba(0,0,0,0.1)',
    'rgba(0,0,0,0) '
]
const lightColors = [
    'rgba(255,255,255,1)',
    'rgba(255,255,255,0.9)',
    'rgba(255,255,255,0.1)'
]

export default function CustomGradient({ postion = "top", mode = 'dark', style }: Props) {
    const bottomCollor = [...mode === "dark" ? darkColors : lightColors].reverse()
    const gradientStyle: ViewStyle = {
        position: 'absolute',
        width: '100%',
        height: 60,
        top: postion === "top" ? 0 : undefined,
        bottom: postion === "bottom" ? 0 : undefined,
    }
    return (
        <LinearGradient
            colors={postion === "top" ? darkColors : bottomCollor}
            style={[gradientStyle, style]}
        />
    )
}


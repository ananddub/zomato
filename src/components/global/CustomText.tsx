
import { Platform, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@unistyles/Constants'

type varaint = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'h8' | 'h9'
type PlatformType = 'android' | 'ios'

interface CusotmTextProps extends TextProps {
    variant?: varaint
    platform?: PlatformType
    fontFamily?: 'Okra-Bold' | 'Okra-ExtraBold' | 'Okra-Medium' | 'Okra-MediumLight' | 'Okra-Regular'
    fontSize?: number
    style?: TextStyle
    color?: string
    numberOfLines?: number
    children?: React.ReactNode
    onLayout?: (event: any) => void
}

const fontSizeMap: Record<varaint, Record<PlatformType, number>> = {
    h1: { android: 24, ios: 22 },
    h2: { android: 22, ios: 20 },
    h3: { android: 20, ios: 18 },
    h4: { android: 18, ios: 16 },
    h5: { android: 16, ios: 14 },
    h6: { android: 14, ios: 12 },
    h7: { android: 12, ios: 10 },
    h8: { android: 10, ios: 8 },
    h9: { android: 8, ios: 6 },
}

export default function CusotmText({
    variant,
    platform,
    fontFamily = "Okra-Regular",
    fontSize,
    style,
    color,
    numberOfLines,
    children,
    onLayout,
    ...props
}: CusotmTextProps) {
    let computedFontSize = Platform.OS == "android" ? RFValue(fontSize || 12) : RFValue(fontSize || 10)
    if (variant && fontSizeMap[variant]) {
        const defaultSize = fontSizeMap[variant][Platform.OS as PlatformType]
        computedFontSize = RFValue(defaultSize)
    }
    const fontFamilyStyles = {
        fontFamily,
    }
    return (
        <Text
            style={[styles.text, {
                color: color || Colors.text,
                textAlign: 'left',
                fontSize: computedFontSize
            },
                fontFamilyStyles,
                style
            ]}
            numberOfLines={numberOfLines}
            onLayout={onLayout}
            {...props}
        >{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center'
    }
})

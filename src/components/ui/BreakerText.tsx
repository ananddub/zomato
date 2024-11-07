import { View, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles } from '@unistyles/authStyles'
import CusotmText from '@components/global/CustomText'
interface Props {
    text: string
}
export default function BreakerText({ text }: Props) {
    const { styles } = useStyles(loginStyles)
    return (
        <View style={[styles.breakerContainer()]}>
            <View style={styles.horizontalLine} />
            <CusotmText
                fontSize={12}
                fontFamily='Okra-Medium'
                style={styles.breakerText}
            >
                {text}
            </CusotmText>
            <View style={styles.horizontalLine} />
        </View>
    )
}

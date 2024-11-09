import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStyleSheet, useStyles } from 'react-native-unistyles'
import { RFValue } from 'react-native-responsive-fontsize'
export default function UnitestStyle() {
    const { styles } = useStyles(unitstyles)
    const [width, setWidth] = useState<number>(0)
    return (
        <View style={styles.backgournd(100, 200)}>
            <Text>UnitestStyle</Text>
        </View>
    )
}

const unitstyles = createStyleSheet({
    backgournd: (width: number, height: number) => ({
        backgroundColor: 'red',
        width: RFValue(width),
        height: RFValue(height)
    })
}) 

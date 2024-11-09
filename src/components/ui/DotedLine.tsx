import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Line, Svg } from 'react-native-svg'

export default function DotedLine() {
    return (
        <View style={styles.container}>
            <Svg height={2} width="100%">
                <Line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="#eee"
                    strokeWidth="2"
                    strokeDasharray="3,3"
                />
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 1,
        marginTop: 20
    },

})

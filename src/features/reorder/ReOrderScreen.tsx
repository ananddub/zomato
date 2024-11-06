import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { emptyStyles } from '@unistyles/emptyStyles'

export default function ReOrderScreen() {
    const { styles } = useStyles(emptyStyles)
    return (
        <View style={styles.container}>
            <Image
                source={require("@assets/images/coming_soon3.png")}
                style={styles.emptyImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
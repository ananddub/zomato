import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { phoneStyles } from '@unistyles/phoneStyles'
import Icon from '@components/global/Icon'
import { Colors } from '@unistyles/Constants'
import { RFValue } from 'react-native-responsive-fontsize'

export default function SocaiLogin() {
    const { styles } = useStyles(phoneStyles)
    return (
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.iconContainer}>
                <Image
                    source={require("@assets/icons/google.png")}
                    style={styles.gimg}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon
                    name='logo-apple'
                    size={RFValue(21)}
                    color={"#222"}
                    iconFamily='Ionicons'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon
                    name='ellipsis-horizontal-sharp'
                    size={RFValue(21)}
                    color={"#222"}
                    iconFamily='Ionicons'
                />
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({})

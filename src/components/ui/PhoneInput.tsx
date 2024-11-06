import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { phoneStyles } from '@unistyles/phoneStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import Icon from '@components/global/Icon'
interface Props {
    onFocus?: () => void
    onBlur?: () => void
    onChangeText?: (text: string) => void
    value?: string
}
export default function PhoneInput({
    onFocus,
    onBlur,
    onChangeText,
    value }: Props) {
    const { styles } = useStyles(phoneStyles)
    return (
        <View style={styles.container}>
            <Pressable style={styles.countryPickerContainer}>
                <CusotmText variant='h2' >🇮🇳</CusotmText>
                <Icon
                    name='caret-down-sharp'
                    size={18}
                    color={Colors.lightText}
                    iconFamily='Ionicons'
                />
            </Pressable>
            <View style={styles.phoneInputContainer}>
                <CusotmText fontFamily='Okra-Bold' >+91</CusotmText>
                <TextInput
                    placeholder='Enter your phone number'
                    keyboardType='phone-pad'
                    value={value}
                    placeholderTextColor={Colors.lightText}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={styles.input}
                />
            </View>
        </View>
    )
}


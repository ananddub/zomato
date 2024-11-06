import { ActivityIndicator, Animated, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useStyles } from 'react-native-unistyles'
import { loginStyles } from '@unistyles/authStyles'
import CusotmText from '@components/global/CustomText'
import BreakerText from '@components/ui/BreakerText'
import PhoneInput from '@components/ui/PhoneInput'
import SocaiLogin from '@components/ui/SocaiLogin'
import { resetAndNavigate } from '@utils/NavigationUtils'
import useKeyboardOffsetHeight from '@utils/useKeyboardOffsetHeight'

export default function LoginScreen() {
    const keyBoardOffsetHeight = useKeyboardOffsetHeight()
    const animatedValue = useRef(new Animated.Value(0)).current
    const { styles } = useStyles(loginStyles)
    const [loading, setLoading] = useState(false)
    const [phone, setPhone] = useState('')
    useEffect(() => {
        if (keyBoardOffsetHeight === 0) {
            Animated.timing(animatedValue, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(animatedValue, {
                toValue: -keyBoardOffsetHeight * 0.25,
                duration: 500,
                useNativeDriver: true
            }).start()
        }
    }, [keyBoardOffsetHeight])
    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            resetAndNavigate('UserBottomTab')
        }, 200)
    }
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.cover}>
                <Image
                    source={require("@assets/images/login.png")}
                    style={[styles.cover]}
                />
            </View>
            <Animated.ScrollView
                bounces={false}
                keyboardShouldPersistTaps='handled'
                keyboardDismissMode='on-drag'
                contentContainerStyle={[styles.bottomContainer]}
                style={{
                    transform: [{ translateY: animatedValue }]
                }}
            >
                <CusotmText
                    variant='h2'
                    fontFamily='Okra-Bold'
                    style={styles.title}
                >
                    India's #1 Food Delivery and Dining App
                </CusotmText>
                <BreakerText
                    text='Log in or sign up'
                />
                <PhoneInput
                    onFocus={() => { }}
                    onBlur={() => { }}
                    value={phone}
                    onChangeText={setPhone}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={handleLogin}
                    disabled={loading}
                    activeOpacity={0.8}
                >
                    {loading ? <ActivityIndicator size="small" color="#fff" />
                        : <CusotmText
                            color='#fff'
                            variant='h5'
                            fontFamily='Okra-Medium'
                        >Continue</CusotmText>}
                </TouchableOpacity>
                <BreakerText text='or' />
                <SocaiLogin />
            </Animated.ScrollView>
            <View style={styles.footer}>
                <CusotmText>
                    By Continuing,you agree to our
                </CusotmText>
                <View style={styles.footerTextContainer}>
                    <CusotmText style={styles.footerText}> Terms of Service </CusotmText>
                    <CusotmText style={styles.footerText}> Privacy Policy </CusotmText>
                    <CusotmText style={styles.footerText}> Contend Policies </CusotmText>
                </View>
            </View>
        </View>
    )
}


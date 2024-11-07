import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useShareState } from '@features/tabs/SharedContext'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from '@components/global/Icon'
import CusotmText from '@components/global/CustomText'

export default function LocationHeader() {
    const { scrollGlobalY, scrollY } = useShareState()
    const { styles } = useStyles(homeStyles)
    const { top } = useSafeAreaInsets()
    const textcolor = "#fff"
    const opacityFadingStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scrollGlobalY.value,
            [0, 80],
            [1, 0],
            Extrapolate.CLAMP
        )
        return {
            opacity: opacity
        }
    })

    return (
        <Animated.View style={[opacityFadingStyle]}>
            <View style={{ height: top }} />
            <View style={styles.flexRowBetween}>
                <View style={styles.flexRowGap}>
                    <Icon
                        name="map-marker"
                        color={textcolor}
                        size={32}
                        iconFamily='MaterialCommunityIcons'
                    />
                    <View style={{ flexDirection: 'column', }}>
                        <TouchableOpacity style={styles.flexRow}>
                            <CusotmText variant='h5'
                                style={{ textAlign: 'left' }}
                                color={textcolor}
                                fontFamily='Okra-Bold' >Erangle Ponchinki </CusotmText>
                            <Icon
                                name="chevron-down"
                                color={textcolor}
                                size={24}
                                iconFamily='MaterialCommunityIcons'
                            />
                        </TouchableOpacity>
                        <CusotmText
                            color={textcolor}
                            style={{ textAlign: 'left' }}
                            fontFamily='Okra-Medium'
                        >Lucknow, Uttar Pradesh</CusotmText>
                    </View>
                </View>
                <View style={styles.flexRowGap}>
                    <TouchableOpacity style={styles.translation}>
                        <Image
                            source={require("@assets/icons/translation.png")}
                            style={styles.translationIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileAvatar}>
                        <Image
                            source={require("@assets/icons/golden_circle.png")}
                            style={styles.goldenCircle}
                        />
                        <Image
                            source={require("@assets/images/user.jpg")}
                            style={styles.profileImage}
                        />

                    </TouchableOpacity>
                </View>
            </View>
        </Animated.View>
    )
}



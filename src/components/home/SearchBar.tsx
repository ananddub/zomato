import { Pressable, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Mic, Search } from 'lucide-react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '@states/reduxHook'
import { useShareState } from '@features/tabs/SharedContext'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { Colors } from '@unistyles/Constants'
import RollingContent from 'react-native-rolling-bar'
import CusotmText from '@components/global/CustomText'
import { setIsVeg } from '@states/reducer/UserSlice'
const searchItem: string[] = [
    'Search "Chai samaosa"',
    'Search "Masala Dosa"',
    'Search "Rava Idli"',
    'Search "ice cream"',
    'Search "pizza"',
    'Search "burger"',
    'Search "pasta"',
]
export default function SearchBar() {
    const dispatch = useDispatch()
    const isVegMode = useAppSelector(state => state.user.isVeg)
    const { styles } = useStyles(homeStyles)
    const { scrollGlobalY } = useShareState()
    const textColorAnimation = useAnimatedStyle(() => {
        const textcolor = interpolate(scrollGlobalY.value, [0, 50], [0, 255])
        return {
            color: `rgb(${textcolor},${textcolor},${textcolor})`
        }
    })
    const handleVegMode = () => {
        dispatch(setIsVeg(!isVegMode))
    }
    return (<>
        <View style={[styles.flexRowBetween, styles.padding]} >
            <TouchableOpacity style={styles.searchInputContainer} activeOpacity={0.8}>
                <Search
                    color={isVegMode ? Colors.active : Colors.primary}
                    strokeWidth={3}
                    size={20}
                />
                <RollingContent interval={3000} defaultStyle={false}
                    customStyle={styles.textContainer}>
                    {searchItem.map((item, index) => {
                        return (
                            <CusotmText key={"search" + index}
                                variant='h6'
                                fontSize={22}
                                style={styles.rollingText}
                                fontFamily={"Okra-Medium"}>
                                {item}
                            </CusotmText>
                        )
                    })}
                </RollingContent>
                <Mic
                    color={isVegMode ? Colors.active : Colors.primary}
                    strokeWidth={2}
                    size={20}

                />
            </TouchableOpacity>
            <Pressable style={styles.vegMode} onPress={handleVegMode}>
                <Animated.Text style={[textColorAnimation, styles.animatedText]}>
                    VEG
                </Animated.Text>
                <Animated.Text style={[textColorAnimation, styles.animatedSubText]}>
                    Mode
                </Animated.Text>
                <Image
                    source={isVegMode ? require("@assets/icons/switch_on.png")
                        : require("@assets/icons/switch_off.png")}
                    style={styles.switch}
                />
            </Pressable>
        </View>
    </>)
}


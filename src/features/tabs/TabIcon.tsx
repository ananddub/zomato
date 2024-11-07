import CusotmText from "@components/global/CustomText"
import { Colors, screenWidth } from "@unistyles/Constants"
import { memo, useState } from "react"
import { RFValue } from "react-native-responsive-fontsize"
import { Image, TextLayoutEventData, TextStyle, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import Dining from "@assets/tabicons/dining.png"
import Dining_focused from "@assets/tabicons/dining_focused.png"
import Live from "@assets/tabicons/live.png"
import Live_focused from "@assets/tabicons/live_focused.png"
import Delivery from "@assets/tabicons/delivery.png"
import Delivery_focused from "@assets/tabicons/delivery_focused.png"
import Reorder from "@assets/tabicons/reorder.png"
import Reorder_focused from "@assets/tabicons/reorder_focused.png"
import { useAppSelector } from "@states/reduxHook"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useShareState } from "./SharedContext"
import { useStyles } from "react-native-unistyles"
import { tabStyles } from "@unistyles/tabStyles"
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"
import ScalePress from "@components/ui/ScalePress"
interface TabProps {
    name: string
    onLayout?: (e: any) => void
}

interface IconProp {
    name: string;
    focused: boolean
}

const styles = {
    width: RFValue(18),
    height: RFValue(18)
}

const tabStyle: ViewStyle = {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
}

const textStyleInActive: TextStyle = {
    textAlign: 'center',
    color: Colors.lightText,
    marginTop: 2,
    fontSize: RFValue(9.5)
}

const textStyleActive: TextStyle = {
    textAlign: 'center',
    color: Colors.active,
    marginTop: 2,
    fontSize: RFValue(9.5)
}


const TabIcon = memo<TabProps>(({ name }) => {
    return (
        <View style={tabStyle}>
            <Image
                source={
                    name === "Dining" ? Dining :
                        name === "ReOrder" ? Reorder :
                            name === "Delivery" ? Delivery :
                                Live
                }
                style={styles}
            />
            <CusotmText style={textStyleInActive}>{name}</CusotmText>
        </View>
    )
})


const TabIconFocused = memo<TabProps>(({ name }) => {
    const isVeg = useAppSelector(state => state.user.isVeg)
    //console.log("isVeg-->", isVeg)

    return (
        <View style={tabStyle}  >
            <Image
                source={
                    name === "Dining" ? Dining_focused :
                        name === "ReOrder" ? Reorder_focused :
                            name === "Delivery" ? Delivery_focused :
                                Live_focused
                }
                style={[styles, { tintColor: (name === "Live") ? undefined : isVeg ? Colors.active : Colors.primary }]}
            />
            <CusotmText
                style={[
                    textStyleInActive,
                    { color: (name === "Live") ? Colors.active : isVeg ? Colors.active : Colors.primary }
                ]}>
                {name}
            </CusotmText>
        </View>
    )
})




export function CustomTabIconComponent(props: BottomTabBarProps) {
    const isVeg = useAppSelector(state => state.user.isVeg)
    const { scrollY } = useShareState()

    const { state, navigation } = props
    const bottom = useSafeAreaInsets()

    const { styles } = useStyles(tabStyles)
    const isLiveTabFocused = state.routes[state.index]?.name === "Live"
    const slidesValue = useSharedValue(200)
    const [startX, setStartX] = useState(0)
    const [width, setWidth] = useState(0)
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: scrollY.value === 1 ?
                        withTiming(100, { duration: 300 })
                        : withTiming(0, { duration: 300 })
                }
            ]
        }
    })
    const indicatorStyle = useAnimatedStyle(() => {
        return {
            left: withTiming(startX + (width * state.index), { duration: 350 })
        }
    })

    const onLayout = (e: any, index: number) => {
        e.target.measure(
            (x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
                if (index === 0) {
                    setStartX(pageX)
                    slidesValue.value = withTiming(pageX)
                    setWidth(width)
                }
            },
        );
    }
    return <>
        <Animated.View
            style={[
                styles.tabBarContainer,
                animatedStyle,
                {
                    paddingBottom: bottom.bottom,
                    backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
                    justifyContent: 'center',
                    paddingHorizontal: 5
                }
            ]}
        >
            <View style={styles.tabContainer}>
                {state.routes.map((route, index) => {
                    const isFocused = state.index === index
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })
                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }
                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        })
                    }
                    return (
                        <ScalePress
                            onPress={onPress}
                            style={styles.tabItem}
                            onLayout={(e) => onLayout(e, index)}
                            key={index}
                            onLongPress={onLongPress}>

                            {
                                isFocused ?
                                    <TabIconFocused name={route.name} />
                                    :
                                    <TabIcon name={route.name} />
                            }
                        </ScalePress>

                    )
                })}
            </View>
            <Animated.View
                style={[
                    styles.slidingIndicatorContainer(width - 3),
                    indicatorStyle, {
                        backgroundColor: (isLiveTabFocused) ? '#fff' : isVeg ? Colors.active : Colors.primary,
                    }
                ]}
            >

            </Animated.View>
        </Animated.View>
    </>
}












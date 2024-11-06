import CusotmText from "@components/global/CustomText"
import { Colors } from "@unistyles/Constants"
import { FC, memo } from "react"
import { RFValue } from "react-native-responsive-fontsize"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"


interface TabProps {
    name: string
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


const TabIcon: FC<TabProps> = memo(({ name }) => {
    console.log(name)
    return (
        <View style={tabStyle}>
            <CusotmText style={textStyleInActive}>{name}</CusotmText>
        </View>
    )
})


const TabIconFocused: FC<TabProps> = memo(({ name }) => {
    console.log(name)
    return (
        <View style={tabStyle}>
            <CusotmText style={textStyleInActive}>{name}</CusotmText>
        </View>
    )
})



export function CustomTabIconComponent(props: BottomTabBarProps) {
    // return focused ? <TabIconFocused name={name} /> : <TabIcon name={name} />
    console.log((props))
    return <View></View>
}












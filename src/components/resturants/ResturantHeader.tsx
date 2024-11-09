import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useStyles } from 'react-native-unistyles'
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ArrowLeft, EllipsisVerticalIcon } from 'lucide-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@unistyles/Constants'
import CusotmText from '@components/global/CustomText'
import { goBack } from '@utils/NavigationUtils'
interface Props {
    title: string
}
export default function ResturantHeader({ title }: Props) {
    const { styles } = useStyles(restaurantHeaderStyles)
    const inset = useSafeAreaInsets()
    return (
        <View style={styles.headerContainer}>
            <View style={{ gap: 10 }}>
                <View style={{ height: inset.top }} />
                <View style={[styles.flexRowGap, {
                    justifyContent: 'space-between',
                    alignItems: 'center', width: '100%'
                }]}>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <TouchableOpacity onPress={() => goBack()}>
                            <ArrowLeft size={RFValue(20)} color={Colors.text} />
                        </TouchableOpacity>
                        <View >
                            <CusotmText fontFamily='Okra-Medium' fontSize={RFValue(7)}
                                color={Colors.text}>
                                {title}
                            </CusotmText>
                            <CusotmText fontFamily='Okra-Bold' fontSize={RFValue(8)} color={Colors.text}>
                                Recommended for you
                            </CusotmText>
                        </View>
                    </View>
                    <EllipsisVerticalIcon
                        size={RFValue(20)}
                        style={{ alignSelf: 'center' }}
                        color={Colors.text}
                    />
                </View>
            </View>
        </View >
    )
}


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { filtertyles } from '@unistyles/filterStyles'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from '@components/global/Icon'
import { RFValue } from 'react-native-responsive-fontsize'
import CusotmText from '@components/global/CustomText'
import { ChevronDown } from 'lucide-react-native'
import { Colors } from '@unistyles/Constants'
interface Props {
    menuTitle: string,
    option: any
}
export default function SortingAndFilters({ menuTitle, option }: Props) {
    const { styles } = useStyles(filtertyles)
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterBar}
        >
            <TouchableOpacity style={styles.filterItem}>
                <View style={{ transform: [{ rotate: '90deg' }] }}>
                    <Icon name='tune-variant'
                        size={RFValue(14)}
                        color={"#222"}
                        iconFamily='MaterialCommunityIcons'
                    />
                </View>
                <CusotmText
                    fontSize={RFValue(8)}
                    fontFamily='Okra-Medium'
                >
                    {menuTitle}
                </CusotmText>
                <ChevronDown
                    size={RFValue(14)}
                    color={Colors.text}
                />
            </TouchableOpacity>
            {
                option.map((item: any, index: number) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={styles.filterItem}
                        >
                            <CusotmText
                                fontFamily='Okra-Medium'
                                fontSize={RFValue(8)}
                            >
                                {item}
                            </CusotmText>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    )
}


import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { filtertyles } from '@unistyles/filterStyles'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from '@components/global/Icon'
import { RFValue } from 'react-native-responsive-fontsize'
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
            <TouchableOpacity style={styles.filterBar}>
                <View>
                    <Icon
                        name='tune-variant'
                        size={RFValue(14)}
                        color={"#222"}
                        iconFamily='MaterialCommunityIcons'
                    />
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

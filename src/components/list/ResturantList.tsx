import { View, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { cardStyles } from '@unistyles/cardStyles'
import CusotmText from '@components/global/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'
import { recommendedListData } from '@utils/dummyData'
import ResturantCard from '@components/home/ResturantCard'

const ResturantList = () => {
    const { styles } = useStyles(cardStyles)
    const { width } = useWindowDimensions()
    const renderItem = ({ item }: any) => {
        return (<ResturantCard item={item} />)
    }
    return (
        <View style={{ width: width }}>
            <CusotmText fontFamily='Okra-Bold' fontSize={RFValue(8)}
                style={styles.centerText}>
                1823 restaurants delivering to you
            </CusotmText>
            <CusotmText style={styles.centerText} fontFamily='Okra-Medium'
                fontSize={RFValue(9)} >
                Featured
            </CusotmText>
            <FlatList
                data={recommendedListData}
                renderItem={renderItem}
                keyExtractor={item => item.name}
                showsHorizontalScrollIndicator={false}
                style={styles.listContainer}
            />
        </View>
    )
}

export default ResturantList

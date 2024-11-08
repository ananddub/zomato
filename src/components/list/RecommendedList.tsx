import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { cardStyles } from '@unistyles/cardStyles'
import { FlatList } from 'react-native-gesture-handler'
import { recommendedListData } from '@utils/dummyData'
import ScalePress from '@components/ui/ScalePress'
import { navigate } from '@utils/NavigationUtils'
import { configureStore } from '@reduxjs/toolkit'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import { RFValue } from 'react-native-responsive-fontsize'
import { Bookmark } from 'lucide-react-native'
import CustomGradient from '@components/global/CustomGradient'

export default function RecommendedList() {
    const { styles } = useStyles(cardStyles)
    const renderItem = ({ item, index }: any) => {
        // console.log(item.discountAmount)
        return (
            <ScalePress style={styles.itemContainer}
                onPress={() => { navigate('ResturantScreen', { item }) }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item?.imageUrl }}
                        style={styles.itemImage}
                    />
                    {
                        item?.discount &&
                        <View style={styles.discountContainer}>
                            <CusotmText color={Colors.background}
                                fontSize={RFValue(8)}
                                fontFamily='Okra-Bold'
                            >
                                {item?.discount}
                            </CusotmText>
                            {
                                item?.discountAmount &&
                                <CusotmText
                                    color={Colors.background}
                                    fontSize={RFValue(6)}
                                    style={{ lineHeight: 11 }}
                                    fontFamily='Okra-Medium'
                                >
                                    {item?.discountAmount}
                                </CusotmText>
                            }
                        </View>
                    }
                    <TouchableOpacity style={styles.bookmarkIcon}>
                        <Bookmark
                            color={Colors.background}
                            fill="grey"
                            size={RFValue(18)}
                        />
                    </TouchableOpacity>
                    <CustomGradient postion="bottom" />
                </View>
                <View style={styles.itemInfo}>
                    <CusotmText color={Colors.lightText}
                        fontSize={RFValue(8)}
                        numberOfLines={1}
                        fontFamily='Okra-Medium'>
                        {item?.name}
                    </CusotmText>
                    <View style={styles.flexRow}>
                        <Image
                            source={require('@assets/icons/clock.png')}
                            style={styles.clockIcon}
                        />
                        <CusotmText
                            fontFamily='Okra-Medium'
                            color={Colors.lightText}
                            fontSize={RFValue(7)}
                            numberOfLines={1}
                        >
                            {item?.time} • {item?.distance}
                        </CusotmText>
                    </View>
                </View>
            </ScalePress>
        )
    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <FlatList
                numColumns={Math.ceil(recommendedListData.length / 2)}
                data={recommendedListData}
                renderItem={renderItem}
                scrollEnabled={false}
                keyExtractor={(item) => "recommend" + item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listContainer}
                style={styles.recommendedContainer}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

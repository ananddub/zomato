import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { cardStyles } from '@unistyles/cardStyles'
import { FlatList } from 'react-native-gesture-handler'
import { recommendedListData } from '@utils/dummyData'
import ScalePress from '@components/ui/ScalePress'
import { navigate } from '@utils/NavigationUtils'
import { configureStore } from '@reduxjs/toolkit'

export default function RecommendedList() {
    const { styles } = useStyles(cardStyles)

    console.log(recommendedListData)
    const renderItem = ({ item, index }: any) => {
        console.log(index)
        return (
            <ScalePress style={styles.itemContainer}
                onPress={() => { navigate('ResturantScreen', { item }) }}
            >
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: item?.imageUrl }}
                        style={styles.itemImage}
                    />
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

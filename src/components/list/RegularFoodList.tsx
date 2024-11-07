import { Image, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { cardStyles } from '@unistyles/cardStyles'
import ScalePress from '@components/ui/ScalePress'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import RecommendedList from './RecommendedList'
import { regularFoodData } from '@utils/dummyData'

export default function RegularFoodList() {
    const { styles } = useStyles(cardStyles)
    const renderItem = ({ item, index }: any) => {
        return (<ScalePress style={styles.regularFoodContainer}>
            <Image
                source={{ uri: item?.imageUrl }}
                style={styles.regularFoodImage}
            />
        </ScalePress>
        )
    }


    return (<ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FlatList
            numColumns={Math.ceil(regularFoodData.length / 2)}
            data={regularFoodData}
            renderItem={renderItem}
            scrollEnabled={false}
            keyExtractor={(item) => "resturant_" + item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            style={styles.regularFoodContainer}
        />
    </ScrollView>
    )
}


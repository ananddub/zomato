import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { useStyles } from 'react-native-unistyles'
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import SortingAndFilters from '@components/home/SortingAndFilters'
import { restaurantItemsData, restaurantsItemfiltersOption } from '@utils/dummyData'
import ResturantHeader from '@components/resturants/ResturantHeader'
import { FlatList } from 'react-native-gesture-handler'
import { Text } from 'react-native-svg'
import DotedLine from '@components/ui/DotedLine'
import FoodCard from '@components/resturants/FoodCard'

export default function ResturantScreen() {
    const route = useRoute() as any
    const restorant = route?.params?.item
    const { styles } = useStyles(restaurantHeaderStyles)
    const renderItem = ({ item }: any) => {
        return (<FoodCard item={item} resturant={restorant} />)
    }
    return (
        <View >
            <ResturantHeader title={restorant?.name} />
            <View style={styles.sortingContainer}>
                <SortingAndFilters menuTitle='Filter' option={restaurantsItemfiltersOption} />
            </View>
            <FlatList
                data={restaurantItemsData}
                renderItem={renderItem}
                scrollEventThrottle={16}
                ItemSeparatorComponent={() => <DotedLine />}
            />
        </View>
    )
}


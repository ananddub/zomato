
import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStyles } from 'react-native-unistyles'
import { foodStyles } from '@unistyles/foodStyles'
import CusotmText from '@components/global/CustomText'
import { RFValue } from 'react-native-responsive-fontsize'
import { Bookmark } from 'lucide-react-native'
import { Colors } from '@unistyles/Constants'
import AddButton from './AddButton'
interface Props {
    item: any
    resturant: any
}
export default function FoodCard({ item, resturant }: Props) {
    const { styles } = useStyles(foodStyles)
    return (<View style={styles.container}>
        <View style={styles.infoContainer}>
            <Image
                source={
                    item?.isVeg ?
                        require("@assets/icons/veg.png")
                        : require("@assets/icons/non_veg.png")
                }
                style={styles.vegIcon}
            />
            <CusotmText fontSize={RFValue(8)} numberOfLines={1} fontFamily='Okra-Medium' >
                {item?.name}
            </CusotmText>
            <CusotmText fontSize={RFValue(8)} numberOfLines={2} style={styles.lowOpacity} fontFamily='Okra-Medium' >
                {item?.description}
            </CusotmText>
            <CusotmText fontSize={RFValue(8)} numberOfLines={2} fontFamily='Okra-Medium' >
                ₹{item?.price}
            </CusotmText>

            <TouchableOpacity style={styles.addToCollectionContainer}>
                <Bookmark size={16} color={Colors.primary} />
                <CusotmText color='#888' fontFamily='Okra-Medium' fontSize={9.5} >
                    Add to collection
                </CusotmText>
            </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
            <View style={styles.image} >
                <Image
                    source={{ uri: item?.image }}
                    style={styles.foodImage}
                />
                <AddButton item={item} resturant={resturant} />
            </View>
        </View>
    </View>
    )
}


import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScalePress from '@components/ui/ScalePress'
import { navigate } from '@utils/NavigationUtils'
import { useStyles } from 'react-native-unistyles'
import { restaurantStyles } from '@unistyles/restuarantStyles'
import CusotmText from '@components/global/CustomText'
import StarRating from '@components/ui/StarRating'
import DotedLine from '@components/ui/DotedLine'

export default function ResturantCard({ item }: any) {
    const { styles } = useStyles(restaurantStyles)
    return (
        <ScalePress onPress={() => { navigate('ResturantScreen', { item }) }}>
            <View style={styles.card}>
                <Image source={{ uri: item?.imageUrl }} style={styles.image} />
                <View style={styles.info}>
                    <View style={styles.textContainer}>
                        <View style={styles.textPart}>
                            <CusotmText
                                variant='h5'
                                numberOfLines={1}
                                fontFamily='Okra-Bold'
                                style={styles.name}>
                                {item?.name}
                            </CusotmText>
                            <CusotmText>
                                {item?.time} • {item.distance} • ₹150 for one
                            </CusotmText>
                        </View>
                        <StarRating rating={item?.rating} />
                    </View>
                    <DotedLine />
                    {
                        item?.discount && (
                            <CusotmText
                                variant='h6'
                                style={styles.details}>
                                {item?.discount} {item?.discountAmount && `• ${item?.discountAmount}`}
                            </CusotmText>
                        )
                    }
                </View>
            </View>
        </ScalePress>
    )
}


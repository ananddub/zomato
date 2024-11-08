import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CusotmText from '@components/global/CustomText'
import { Star } from 'lucide-react-native'

const getRatingColor = (rating: number) => {
    if (rating >= 4) {
        return '#1C653C'
    }
    else if (rating >= 3) {
        return '#128145'
    }
    else if (rating >= 2) {
        return '#e67e22'
    } else if (rating >= 1) {
        return '#953925'
    } else {
        return '#ccc'
    }
}
interface Props {
    rating: number
}
export default function StarRating({ rating }: Props) {
    const backgroundColor = getRatingColor(rating)
    return (
        <View style={[styles.container, { backgroundColor }]}>
            <CusotmText
                color='#fff'
                fontSize={12}
                fontFamily='Okra-Bold'
            >
                {rating || '-'}
            </CusotmText>
            <Star
                color='#fff'
                size={16}
                fill={'#fff'}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,
        borderRadius: 10,
        gap: 5,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})


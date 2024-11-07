import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useStyles } from 'react-native-unistyles'
import { homeStyles } from '@unistyles/homeStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import { Bookmark, House } from 'lucide-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import RecommendedList from '@components/list/RecommendedList'
import BreakerText from '@components/ui/BreakerText'
import RegularFoodList from '@components/list/RegularFoodList'

export default function ExploreSection() {
    const [tabselected, setTabSelected] = useState(1)
    const { styles } = useStyles(homeStyles)
    return (
        <View style={styles.topHidingContainer}>
            <View style={styles.flexRowCenter}>
                <Pressable style={styles.leftTab(tabselected === 1)}
                    onPress={() => setTabSelected(1)}
                >
                    <CusotmText
                        color={tabselected === 1 ? Colors.text : Colors.lightText}
                        fontFamily='Okra-Medium'
                    >Recommended</CusotmText>
                </Pressable>
                <Pressable style={styles.rightTab(tabselected === 2)}
                    onPress={() => setTabSelected(2)}
                >
                    <Bookmark
                        color={tabselected === 2 ? Colors.text : Colors.lightText}
                        size={RFValue(12)}
                    />
                    <CusotmText
                        color={tabselected === 2 ? Colors.text : Colors.lightText}
                        fontFamily='Okra-Medium'
                    >Collection</CusotmText>
                </Pressable>

            </View>

            <RecommendedList />
            <BreakerText text="WHAT'S ON YOUR MIND" />
            <RegularFoodList />
            <BreakerText text="ALL RESTAURANTS" />
        </View>
    )
}


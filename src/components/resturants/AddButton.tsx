import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from 'react-native-unistyles'
import { foodStyles } from '@unistyles/foodStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
interface Props {
    item: any,
    resturant: any
}
export default function AddButton() {
    const dispatch = useDispatch()
    const { styles } = useStyles(foodStyles)
    return (
        <View>
            <View style={styles.addButtonContainer(false)}>
                <CusotmText
                    fontSize={10}
                    color={Colors.text}
                    fontFamily='Okra-Bold'
                >
                    Add
                </CusotmText>
            </View>
        </View>
    )
}


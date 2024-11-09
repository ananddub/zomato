import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from 'react-native-unistyles'
import { foodStyles } from '@unistyles/foodStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import { useAppSelector } from '@states/reduxHook'
interface Props {
    item: any,
    resturant: any
}
export default function AddButton() {
    const dispatch = useDispatch()
    const { styles } = useStyles(foodStyles)
    const cart = useAppSelector((state) => state.cart.carts)
    return (
        <View>
            <View style={styles.addButtonContainer(cart !== null)}>
                <CusotmText fontSize={10} color={Colors.text} fontFamily='Okra-Bold' >
                    Add
                </CusotmText>
            </View>
        </View>
    )
}


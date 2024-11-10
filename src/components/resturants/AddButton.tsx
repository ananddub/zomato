import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from 'react-native-unistyles'
import { foodStyles } from '@unistyles/foodStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import { useAppSelector } from '@states/reduxHook'
import { selectResturantCartItem } from '@states/reducer/UserSlice'
interface Props {
    item: any,
    resturant: any
}
export default function AddButton({ item, resturant }: Props) {
    const dispatch = useDispatch()
    const { styles } = useStyles(foodStyles)
    const cart = useAppSelector(selectResturantCartItem(resturant.id, item.id))
    const addCardHandler = useCallback(async () => {
        if (item.isCustomizable) {
            if (cart !== null) {
                console.log("open modal")
            }
        }
    }, [dispatch, resturant, item, cart])
    return (<>
        <View style={styles.addButtonContainer(cart !== null)}>
            {
                cart ? (null) : (
                    <TouchableOpacity onPress={addCardHandler} style={styles.noSelectionContainer}>
                        <CusotmText fontFamily='Okra-Bold' variant='h5' color={Colors.primary} >
                            Add
                        </CusotmText>
                        <CusotmText fontFamily='Okra-Bold' variant='h5' color={Colors.primary} style={styles.plusSmallIcon} >
                            +
                        </CusotmText>

                    </TouchableOpacity>
                )
            }



        </View>
        {item?.isCustomizable && (
            <CusotmText fontFamily='Okra-Medium' style={styles.customizeText}>
                Cotomisable
            </CusotmText>
        )}
    </>
    )
}


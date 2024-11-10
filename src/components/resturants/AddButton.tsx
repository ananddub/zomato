import { TouchableOpacity, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useStyles } from 'react-native-unistyles'
import { foodStyles } from '@unistyles/foodStyles'
import CusotmText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import { useAppSelector } from '@states/reduxHook'
import { selectResturantCartItem } from '@states/reducer/UserSlice'
import { addItemToCart, removeItemFromCart } from '@states/reducer/cartSlice'
import ScalePress from '@components/ui/ScalePress'
import { Minus, Plus } from 'lucide-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import AnimatedNumber from 'react-native-animated-numbers'
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
                return
            }
        } else {
            dispatch(addItemToCart({
                resturant,
                items: {
                    ...item,
                    customizations: []
                }
            }))
        }
    }, [dispatch, resturant, item, cart])


    const removeCardHandler = useCallback(() => {
        if (item.isCustomizable) {
            if (cart !== null) {
                console.log("open modal")
                return
            }
        } else {
            dispatch(removeItemFromCart({
                resturantId: resturant.id,
                itemId: item.id
            }))
        }
    }, [dispatch, item, resturant, cart])
    return (<>
        <View style={styles.addButtonContainer(cart !== null)}>
            {
                cart ? (
                    <View style={[styles.selectedContainer]}>
                        <ScalePress tflex={0} onPress={removeCardHandler} >
                            <Minus
                                color='#fff'
                                size={RFValue(13)}
                                strokeWidth={4}
                            />
                        </ScalePress>
                        <AnimatedNumber
                            includeComma={false}
                            animationDuration={300}
                            animateToNumber={cart?.quantity}
                            fontStyle={styles.animatedCount}
                        />
                        <ScalePress tflex={0} onPress={addCardHandler} >
                            <Plus
                                color='#fff'
                                size={RFValue(13)}
                                strokeWidth={4}
                            />
                        </ScalePress>

                    </View>

                ) : (
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


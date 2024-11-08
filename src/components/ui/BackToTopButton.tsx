import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from '@components/global/Icon'
import { ArrowUpIcon, CircleArrowUp } from 'lucide-react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import CusotmText from '@components/global/CustomText'
interface Props {
    onPress: () => void
}
export default function BackToTopButton({ onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6
            }}>
            <CircleArrowUp color='#fff' size={RFValue(15)} />
            <CusotmText variant='h6' color='#fff' fontFamily='Okra-Bold'>
                Back To Top
            </CusotmText>
        </TouchableOpacity>
    )
}


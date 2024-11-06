import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
    name: string
    size: number
    color?: string
    iconFamily: 'Ionicons' | 'MaterialCommunityIcons' | 'MaterialIcons'
}

export default function Icon({
    name,
    size,
    color,
    iconFamily
}: Props) {
    return (
        <>
            {iconFamily === 'Ionicons' && <Ionicons name={name} size={size} color={color} />}
            {iconFamily === 'MaterialCommunityIcons' && <MaterialCommunityIcons name={name} size={size} color={color} />}
            {iconFamily === 'MaterialIcons' && <MaterialIcons name={name} size={size} color={color} />}
        </>
    )
}

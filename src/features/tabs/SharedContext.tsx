import { createContext, useContext } from "react";
import Animated, { useSharedValue, withTiming } from "react-native-reanimated";
interface SharedStateContextType {
    scrollY: Animated.SharedValue<number>;
    scrollGlobalY: Animated.SharedValue<number>;
    scrollToTop: () => void
}


const SharedContext = createContext<SharedStateContextType | undefined>(undefined);

interface Props {
    children: React.ReactNode
}
export function ShareStateProvider(props: Props) {
    const scrollY = useSharedValue(0)
    const scrollGlobalY = useSharedValue(0)
    const scrollToTop = () => {
        scrollY.value = withTiming(0, { duration: 300 })
        scrollGlobalY.value = withTiming(0, { duration: 300 })
    }

    return (
        <SharedContext.Provider value={{ scrollToTop, scrollY, scrollGlobalY }}>
            {props.children}
        </SharedContext.Provider>
    )
}

export const useShareState = () => {
    const context = useContext(SharedContext)
    if (!context) {
        throw new Error("useShareState must be used within a ShareStateProvider")
    }
    return context
}

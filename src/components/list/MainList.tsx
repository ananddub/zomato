import { NativeScrollEvent, NativeSyntheticEvent, SectionList, StyleSheet, Text, View, ViewToken } from 'react-native'
import React, { useRef, useState } from 'react'
import { Section } from 'lucide-react-native'
import ExploreSection from '@components/home/ExploreSection'
import ResturantList from './ResturantList'
import { useStyles } from 'react-native-unistyles'
import { restaurantStyles } from '@unistyles/restuarantStyles'
import { useShareState } from '@features/tabs/SharedContext'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'

const sectionData = [
    { title: 'Explore', data: [{}], renderItem: () => <ExploreSection /> },
    { title: 'Resturants', data: [{}], renderItem: () => <ResturantList /> },
]

export default function MainList() {
    const { styles } = useStyles(restaurantStyles)
    const { scrollGlobalY, scrollY, scrollToTop } = useShareState()
    const prevScrollYTopButton = useRef<number>(0)
    const prevScrollY = useRef(0)
    const sectionListRef = useRef<SectionList>(null)

    const [isResturantVisible, setIsResturantVisible] = useState<boolean>(false)
    const [isNearEnd, setIsNearEnd] = useState<boolean>(false)

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        console.log('scrolling ')
        const currentScrollY = event.nativeEvent.contentOffset.y
        const isScrollDown = currentScrollY > prevScrollY.current

        scrollY.value = isScrollDown ? withTiming(1, { duration: 300 }) : withTiming(0, { duration: 300 })
        scrollGlobalY.value = currentScrollY
        prevScrollY.current = currentScrollY

        const containerHeight = event.nativeEvent.contentSize.height
        const layoutHeight = event.nativeEvent.layoutMeasurement.height
        const offset = event.nativeEvent.contentOffset.y

        const isNearEnd = offset + layoutHeight > (containerHeight - 500)
        setIsNearEnd(isNearEnd)

    }

    const handleScrollToTop = async () => {
        scrollToTop()
        sectionListRef.current?.scrollToLocation({ sectionIndex: 1, itemIndex: 0, animated: true })
    }

    const backToTopStyle = useAnimatedStyle(() => {
        const isScrollingUp = scrollGlobalY.value < prevScrollYTopButton.current && scrollGlobalY.value > 180
        const opacity = withTiming(isScrollingUp && (isResturantVisible || isNearEnd) ? 1 : 0, { duration: 300 })
        const translateY = withTiming(isScrollingUp && (isResturantVisible || isNearEnd) ? 0 : 10, { duration: 300 })


        prevScrollYTopButton.current = scrollGlobalY.value
        return {
            opacity,
            transform: [{ translateY }]
        }
    })

    const viewAbiltiyConfig = {
        viewAreaCoveragePercentThreshold: 80
    }

    const onViewableItemChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
        const restuatarntVisible = viewableItems.some((item) => item?.section?.title === "Resturants" && item?.isViewable)
        setIsResturantVisible(restuatarntVisible)
    }

    return (
        <SectionList
            ref={sectionListRef}
            sections={sectionData}
            overScrollMode='always'
            onScroll={handleScroll}
            scrollEventThrottle={16}
            bounces={false}
            nestedScrollEnabled
            scrollEnabled
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => "section" + index.toString()}
            contentContainerStyle={styles.listContainer}
            viewabilityConfig={viewAbiltiyConfig}
            onViewableItemsChanged={onViewableItemChanged}
            stickySectionHeadersEnabled={true}
        />

    )
}

const styles = StyleSheet.create({})

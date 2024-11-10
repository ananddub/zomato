import { View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, Easing, useSharedValue, withRepeat, withTiming, Extrapolate, interpolate, interpolateColor, runOnUI } from 'react-native-reanimated';
import { createStyleSheet } from 'react-native-unistyles';

export default function SolarSystem() {
    const rotation = useSharedValue(0);
    const borderRadius = useSharedValue(20);
    const scale = useSharedValue(1);
    const r = useSharedValue(0)
    const g = useSharedValue(0)
    const b = useSharedValue(0)
    const opacity = useSharedValue(1)
    rotation.value = withRepeat(withTiming(1560, { duration: 4000, easing: Easing.linear }), -1, false);
    borderRadius.value = withRepeat(withTiming(100, { duration: 4000, easing: Easing.linear }), -1, true);
    scale.value = withRepeat(withTiming(1.5, { duration: 800, easing: Easing.linear }), -1, true);

    r.value = withRepeat(withTiming(255, { duration: 6300, easing: Easing.linear }), -1, true);
    g.value = withRepeat(withTiming(255, { duration: 4000, easing: Easing.linear }), -1, true);
    b.value = withRepeat(withTiming(255, { duration: 3200, easing: Easing.linear }), -1, true);
    const animatColor = useAnimatedStyle(() => {


        return {
            backgroundColor: `rgba(${r.value},${g.value},${b.value},${1})`,
            borderRadius: borderRadius.value,
            height: 200, width: 200,
            transform: [{ rotate: `${rotation.value}deg` }, { scale: scale.value }],
        }
    })
    const gap = 30;
    return (
        <View style={styles.container}>
            <Animated.View style={[animatColor, {
                justifyContent: 'center',
                backgroundColor: '#1c1c1c',
                alignItems: 'center', gap: gap,
            }]} >
            </Animated.View>
        </View>
    );
}

const styles = createStyleSheet({
    box: (backgroundColor, height = 10, width = 10) => ({
        height: height,
        width: width,
        borderRadius: 100,
        backgroundColor: backgroundColor,
    }),
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

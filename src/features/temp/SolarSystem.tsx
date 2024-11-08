import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export default function SolarSystem() {
    const rotation = useSharedValue(0);

    rotation.value = withRepeat(withTiming(360, { duration: 1000 }), -1, false);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            height: 200, width: 200,
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });
    const gap = 30;
    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle, {
                justifyContent: 'center',
                alignItems: 'center', gap: gap,
            }]} >
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row', gap: gap }}>
                        <View style={[styles.box, { backgroundColor: 'red' }]} />
                        <View style={[styles.box, { backgroundColor: 'blue' }]} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: gap }}>
                        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
                        <View style={[styles.box, { backgroundColor: 'green' }]} />
                    </View>
                </View>
                <View >
                    <View style={{ flexDirection: 'row', gap: gap }}>
                        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
                        <View style={[styles.box, { backgroundColor: 'green' }]} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: gap }}>
                        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
                        <View style={[styles.box, { backgroundColor: 'green' }]} />
                    </View>
                </View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 60,
        width: 60,
        borderRadius: 100,
        backgroundColor: 'green',
    }

});

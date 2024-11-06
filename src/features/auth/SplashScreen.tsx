import { splashStyles } from '@unistyles/authStyles';
import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Platform, Image } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Animated, { FadeInDown } from 'react-native-reanimated'
import { resetAndNavigate } from '@utils/NavigationUtils';
import CusotmText from '@components/global/CustomText';

const SplashScreen = () => {
    const { styles } = useStyles(splashStyles)
    React.useEffect(() => {
        const timeid = setTimeout(() => {
            resetAndNavigate('LoginScreen')
        }, 3000)
        return () => {
            clearTimeout(timeid)
        }
    }, [])
    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <Image
                style={styles.logoImage}
                source={require('@assets/images/logo_t.png')}
            />
            <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(400).duration(800)}>
                <Image
                    source={require("@assets/images/tree.png")}
                    style={styles.treeImage}
                />
                <CusotmText
                    variant='h5'
                    style={styles.msgText}
                    fontFamily='Okra-Medium'
                    color='white'
                >
                    Carbon and Plastic Neutral Deliveries in India
                </CusotmText>
            </Animated.View>
        </View>
    );
};

export default SplashScreen;


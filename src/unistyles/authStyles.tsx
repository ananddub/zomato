import { createStyleSheet } from "react-native-unistyles";
import { useWindowDimensions } from "react-native";

export const splashStyles = createStyleSheet(({ colors, device }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoImage: {
        width: device.width * 0.6,
        height: device.height * 0.4,
        resizeMode: 'contain',
        marginTop: 80,
    },
    treeImage: {
        width: device.width * 0.6,
        height: device.height * 0.18,
        resizeMode: 'contain',
    },
    msgText: {
        textAlign: "center",
    },
    animatedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    }
}))

export const loginStyles = createStyleSheet(({ colors, device, border }) => ({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    cover: {
        width: '100%',
        height: device.height * 0.4,
        resizeMode: 'cover',
        borderBottomRightRadius: 60,
        borderBottomLeftRadius: 60,
        borderBottomEndRadius: 60,
        borderBottomStartRadius: 60
    },
    bottomContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    title: {
        textAlign: 'center',
        marginHorizontal: 20
    },
    breakerContainer: (width = useWindowDimensions().width, paddingHorizontal = 10) => ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal,
        gap: 10,
        overflow: "hidden",
        width,
        marginTop: 20,
        marginBottom: 10
    }),
    horizontalLine: {
        height: 1,
        width: '100%',
        position: 'absolute',
        backgroundColor: colors.border,
        zIndex: -1
    },
    breakerText: {
        opacity: 0.8,
        backgroundColor: colors.background,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 45,
        marginVertical: 5,
        borderRadius: border.md,
    },
    footer: {
        position: "absolute",
        bottom: 26,
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerTextContainer: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        marginTop: 5
    },
    footerText: {
        textDecorationLine: 'underline',
        fontSize: 10
    },

}))

import React from "react"
import { View, StyleSheet } from "react-native"
import { HeadingM, Paragraph } from "./Text"

const headerStyles = StyleSheet.create({
    headerCard: {
        backgroundColor: 'hsl(10, 79%, 65%)',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        maxHeight: 75
    },
    textContainer: {
        flex: 1
    },
    logoContainer: {
        aspectRatio: 1,
        height: '100%',
        alignSelf: 'flex-end',
        justifyContent: 'center'
    },
    circleOutlined: {
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 100,
        height: '80%',
        aspectRatio: 1,
        position: 'absolute',
        left: -7
    },
    circleFilled: {
        backgroundColor: 'hsl(25, 47%, 15%)',
        borderRadius: 100,
        height: '80%',
        aspectRatio: 1,
        position: 'absolute',
        left: 7
    },
})

type HeaderCardProps = { balance: number }
const HeaderCard: React.FC<HeaderCardProps> = ({ balance }) => (
    <View style={headerStyles.headerCard}>
        <View style={headerStyles.textContainer}>
            <Paragraph color='#fff'>My balance</Paragraph>
            <HeadingM color='#fff'>${balance}</HeadingM>
        </View>
        <View style={headerStyles.logoContainer}>
            <View style={headerStyles.circleFilled} />
            <View style={headerStyles.circleOutlined} />
        </View>
    </View>
)

export default HeaderCard
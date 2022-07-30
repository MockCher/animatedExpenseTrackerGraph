import React, { useEffect, useReducer, useRef, useState } from "react"
import { Animated, Easing, Pressable as OriginPressable, View, Text } from "react-native"
import PopOver from "./PopOver"

const Pressable = Animated.createAnimatedComponent(OriginPressable)


type ColumnProps = { label: string, value: number, delay: number, focused: boolean, onPress: Function }
const Column: React.FC<ColumnProps> = ({ label, value, delay, focused, onPress }) => {


    // Color

    const [hovered, setHovered] = useState(false)
    const [pressed, setPressed] = useState(false)
    
    const handleHoverIn = () => {setHovered(true)}
    const handleHoverOut = () => {setHovered(false)}
    const handlePressIn = () => {setPressed(true)}
    const handlePressOut = () => {setPressed(false)}

    useEffect(() => {
        Animated.timing(
            columnColorAnimation,
            {
                toValue:  focused && hovered ? 0.75 : focused ? 1 : hovered ? 0.5 : 0,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: false
            }
        ).start()
    },[pressed, focused, hovered])

    const columnColorAnimation = useRef(new Animated.Value(0)).current

    // Height

    const columnHeightAnimation = useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(
                columnHeightAnimation,
                {
                    toValue: 0,
                    duration: 250*(value/50),
                    delay: delay*10,
                    easing: Easing.ease,
                    useNativeDriver: false
                }
            ),
            Animated.timing(
                columnHeightAnimation,
                {
                    toValue: 1,
                    duration: 550,
                    delay: delay*50,
                    easing: Easing.elastic(1.2),
                    useNativeDriver: false
                }
            )
        ]).start()
    }, [value])

    return (
    <View>
        <Pressable 
            style={[
                { width: 35, height: columnHeightAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [5, value*3]
                }), backgroundColor: columnColorAnimation.interpolate({
                    inputRange: [0, 0.5, 0.75, 1],
                    outputRange: ['hsl(10, 79%, 65%)','hsl(10, 79%, 55%)', 'hsl(186, 34%, 75%)', 'hsl(186, 34%, 60%)']
                }), borderRadius: 5, zIndex: 2 },
            ]} 
            onHoverIn={handleHoverIn}
            onHoverOut={handleHoverOut}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            onPress={() => onPress(delay)}
        />
        <Text style={{ textAlign: 'center', margin: 5 }}>{label}</Text>
        <PopOver show={pressed || hovered || focused} label={value.toString()} prefix={'$'} />
    </View>
)} 

export default Column
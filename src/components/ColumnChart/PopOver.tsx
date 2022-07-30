import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Text } from "react-native";

interface LayoutRectangle {
    x: number;
    y: number;
    width: number;
    height: number;
}

type PopOverTypes = { label: string, prefix: string, show: boolean  }
const PopOver: React.FC<PopOverTypes> = ({ label, prefix, show }) => {
    
    const [{ x, y, width, height }, setLayout] = useState<LayoutRectangle>({ x: 0, y: 0, width: 0, height: 0 })
    const popOverRef = useRef(null)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const translateYAnim = useRef(new Animated.Value(30)).current
    
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: show ? 1 : 0,
                duration: 250,
                useNativeDriver: false
            }),
            Animated.timing(translateYAnim, {
                toValue: show ? 1 : 0,
                duration: 250,
                easing: Easing.elastic(1),
                useNativeDriver: false
            }),
        ]).start()
    },[show])

    return (
        <Animated.View 
            pointerEvents='none'
            ref={popOverRef}
            onLayout={(event) => {
                setLayout(event.nativeEvent.layout)
            }}
            style={{ backgroundColor: '#1c1c1c', padding: 5, borderRadius: 5, justifyContent: 'center', alignItems: 'center', zIndex: 99, top: translateYAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -30]
            }), position: 'absolute', left: -width/4, opacity: fadeAnim, width: '200%' }}>
            <Text numberOfLines={1} style={{ color: '#fff', flexDirection: 'row' }}>{prefix} {label}</Text>
        </Animated.View>
    )
} 
export default PopOver

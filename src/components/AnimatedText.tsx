


import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

type AnimatedTextProps = {
    total: number,
    prefix: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ total, prefix }) => {

    const animNumber = useRef(new Animated.Value(0)).current
    const [displayTotal, setDisplayTotal] = useState("0")

    useEffect(() => {
        animNumber.addListener(({ value }) => setDisplayTotal(value.toFixed(2)))
        Animated.timing(animNumber,{
            toValue: total,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.bounce),
        }).start()
    },[total])

    useEffect(() => {
        if (total.toString() === displayTotal)
            animNumber.removeAllListeners()
    }, [total, displayTotal])

  return (
    <Animated.Text style={styles.text}>{prefix}{displayTotal}</Animated.Text>
  )
}

AnimatedText.defaultProps = { prefix: '' }

export default AnimatedText

const styles = StyleSheet.create({
    text: { fontSize: 24, fontWeight: 'bold' }
})
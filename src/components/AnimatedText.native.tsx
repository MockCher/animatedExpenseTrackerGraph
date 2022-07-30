


import { Animated, Easing, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

type AnimatedTextProps = {
    total: number,
    prefix: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ total, prefix }) => {
  return (
    <Animated.Text style={styles.text}>{prefix}{total}</Animated.Text>
  )
}

AnimatedText.defaultProps = { prefix: '' }

export default AnimatedText

const styles = StyleSheet.create({
    text: { fontSize: 24, fontWeight: 'bold' }
})
import { Pressable, StyleSheet, ButtonProps as ButtonOriginProps } from 'react-native'
import React from 'react'
import { HeadingM } from './Text'

type ButtonProps = {
    style: Object
} & ButtonOriginProps

const Button: React.FC<ButtonProps> = ({ title, onPress, color, style }) => {
    const styles = StyleSheet.create({
        button: {
            backgroundColor: color ?? 'lightblue',
            paddingHorizontal: 20,
            paddingVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginTop: 10,
            ...style
        }
    })
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <HeadingM color='#fff'>{title}</HeadingM>
    </Pressable>
  )
}

export default Button

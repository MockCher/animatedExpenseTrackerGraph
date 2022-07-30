import { StyleSheet, Text as BaseText, TextProps as BaseTextProps } from 'react-native'
import React, { FunctionComponent as FC, useEffect, useState } from 'react'

type ITextProps = {
    children: React.ReactNode,
    color?: string,
} & BaseTextProps

const Text: FC<ITextProps> = ({ children, color, ...props }) => {

    const styles = StyleSheet.create({
        text: {
            color: color,
        }
    })

    return <BaseText {...props} style={[styles.text, props.style]}>{children}</BaseText>
}

Text.defaultProps = {
    children: 'Label',
    color: '#1c1c1c',
}

export default Text


const presetStyles = StyleSheet.create({
  headingL: { fontSize: 30, fontWeight: 'bold' },
  headingM: { fontSize: 20, fontWeight: 'bold' },
  headingS: { fontSize: 15, fontWeight: 'bold' },
  subheadingL: { fontSize: 16 },
  subheadingM: { fontSize: 13 },
  subheadingS: { fontSize: 11 },
  paragraphBold: { fontSize: 13, fontWeight: 'bold' },
  paragraph: { fontSize: 13 },
})

// Presets
export const HeadingL: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.headingL, props.style]} />
export const HeadingM: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.headingM, props.style]} />
export const HeadingS: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.headingS, props.style]} />

export const SubheadingL: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.subheadingL, props.style]} />
export const SubheadingM: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.subheadingM, props.style]} />
export const SubheadingS: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.subheadingS, props.style]} />

export const Paragraph: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.paragraph, props.style]} />
export const ParagraphBold: FC<ITextProps> = ({...props}) => <Text {...props} style={[presetStyles.paragraphBold, props.style]} />

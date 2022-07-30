import React from "react"
import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
    divider:  {
        width: '100%',
        height: 1,
        backgroundColor: '#ccc'
    },
})

const Divider = () => <View style={styles.divider} />

export default Divider
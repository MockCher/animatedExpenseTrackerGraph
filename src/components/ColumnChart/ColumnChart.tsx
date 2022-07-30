import React, { useState } from "react"
import { StyleSheet, View } from "react-native"
import Column from "./Column"


export type ExpenseDataPoint = { label: string, value: number }

const styles = StyleSheet.create({
    chartContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        padding: 20,
        justifyContent: 'space-between',
    },
})

type ColumnChartProps = { data: Array<ExpenseDataPoint> }
const ColumnChart: React.FC<ColumnChartProps> = ({ data }) => {
    const [focusedColumn, setFocusedColumn] = useState(null)
   return (
    <View style={styles.chartContainer}>
        {
            data.map((item, index) => <Column focused={index === focusedColumn} label={item.label} value={item.value} key={index} delay={index} onPress={setFocusedColumn} />)
        }
    </View>
)}

export default ColumnChart